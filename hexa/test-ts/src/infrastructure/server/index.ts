import { createApp } from "../../app";




const app = createApp();

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

