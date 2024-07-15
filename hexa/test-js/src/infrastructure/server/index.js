import { createApp } from "../../app.js";


const app = createApp();

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});