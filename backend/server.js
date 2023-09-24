import { app } from "./index.js";

const port = process.env.PORT || 3001;
console.log(process.env.PAYPAL_CLIENT_ID)

app.listen(port, () =>
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
