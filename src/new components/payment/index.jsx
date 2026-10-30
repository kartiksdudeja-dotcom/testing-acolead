import { useEffect, useMemo, useState } from "react";
import { Box, CircularProgress, Dialog, DialogContent } from "@mui/material";
import { phonePeHelpers } from "./phonepe.constants";
import PaymentFailed, { PaymentPending } from "./PaymentFailed";
import PaymentSuccess from "./PaymentSuccess";
import { BACKEND_URL, cpcrmApi } from "../../redux/cpcrm.api";
import { useSearchParams } from "react-router-dom";

export default function PaymentResponseDialog() {
  const [searchParams] = useSearchParams();

  const [paymentResponseDialog, setPaymentResponseDialog] = useState(null);

  useEffect(() => {
    const merchantOrderId = searchParams.get("merchantOrderId");
    const cpId = searchParams.get("cpId");

    if (!merchantOrderId || !cpId) return;

    setPaymentResponseDialog({ cpId, merchantOrderId });

    // const params = new URLSearchParams(searchParams);
    // params.delete("cpId");
    // params.delete("merchantOrderId");
    // navigate(`${window.location.pathname}?${params.toString()}`, { replace: true });
  }, [searchParams]);

  const onClose = () => {
    setPaymentResponseDialog(null);
  };

  const { data: statusData, isUninitialized, isLoading, isFetching } = cpcrmApi.useCheckLicensePaymentStatusQuery({
    cpId: paymentResponseDialog?.cpId,
    merchantOrderId: paymentResponseDialog?.merchantOrderId,
  }, {
    skip: !paymentResponseDialog?.cpId || !paymentResponseDialog?.merchantOrderId || !paymentResponseDialog,
    refetchOnMountOrArgChange: true,
  });

  const loading = isUninitialized || isLoading || isFetching;

  const { isSuccess, isFailed } = useMemo(
    () => ({
      isSuccess: statusData?.state === "COMPLETED",
      isFailed: statusData?.state === "FAILED",
    }),
    [statusData],
  );

  const navigateToApp = async () => {
    const params = new URLSearchParams(paymentResponseDialog || {});
    const redirectUrl = `${BACKEND_URL}/v1/auth/phonepe/redirect?${params.toString()}`;
    window.location.replace(statusData?.appRedirectUrl || redirectUrl);
  };

  const RenderContent = () => {
    if (!statusData) return null;

    // Invalid Order ID / API Error
    if (phonePeHelpers.isErrorResponse(statusData)) {
      return (
        <PaymentFailed
          minHeight="80vh"
          errorCode={statusData.code}
          description={statusData.message}
          navigateToApp={navigateToApp}
        />
      );
    }

    switch (statusData.state) {
      case "COMPLETED":
        return (
          <PaymentSuccess minHeight={"80vh"} navigateToApp={navigateToApp} />
        );

      case "FAILED":
        return (
          <PaymentFailed
            minHeight="80vh"
            errorCode={statusData.errorCode}
            detailedErrorCode={statusData.detailedErrorCode}
            description={statusData.errorContext?.description}
            source={statusData.errorContext?.source}
            stage={statusData.errorContext?.stage}
            navigateToApp={navigateToApp}
          />
        );

      case "PENDING":
        return (
          <PaymentPending
            minHeight="80vh"
            orderId={statusData.orderId}
            expireAt={statusData.expireAt}
            navigateToApp={navigateToApp}
          />
        );

      default:
        return (
          <PaymentFailed
            minHeight="80vh"
            description="Unknown payment status."
            navigateToApp={navigateToApp}
          />
        );
    }
  };

  return (
    <Dialog
      open={!!paymentResponseDialog}
      maxWidth="sm"
      fullWidth={!(isSuccess || isFailed)}
      onClose={onClose}
      scroll="paper"
    >
      <DialogContent>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
              width: "100%",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <RenderContent />
        )}
      </DialogContent>
    </Dialog>
  );
}
