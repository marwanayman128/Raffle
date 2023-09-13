/* eslint-disable react/prop-types */
import Link from '@mui/material/Link';

const MyLink = (props) => {
  return (
    <Link color="inherit" underline="none" {...props}>
      {props.children}
    </Link>
  );
}

export default MyLink;