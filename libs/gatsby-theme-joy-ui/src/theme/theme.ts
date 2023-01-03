import { extendTheme } from "@mui/joy";
import Link from "../components/Link";

export default extendTheme({
  components: {
    JoyLink: { defaultProps: { component: Link } },
  },
});
