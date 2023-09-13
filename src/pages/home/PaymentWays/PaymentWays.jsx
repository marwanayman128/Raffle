import { Container, Stack, Typography } from "@mui/material";
import './PaymentWays.css';

export default function PaymentWays() {
    return (
        <>
            <Container>
                <Stack spacing={2} pb={10} justifyContent={"center"} alignItems={"center"}>
                    <Typography fontWeight={700} variant="h5">Explore Ways To Save</Typography>
                    <img className="PaymentWaySectionImg" src="/images/PaymentWaySection/Scuhoola.png"  alt="" />
                    <img className="PaymentWaySectionImg" src="/images/PaymentWaySection/Valuo.png"    alt="" />
                    <img className="PaymentWaySectionImg" src="/images/PaymentWaySection/Sympl.png"  alt="" />
                </Stack>
            </Container>
        </>
    )
}
