// AW_Text.js
import Typography from '@mui/material/Typography';

const AW_Text = ({ variant, bold, children, ...props }) => {
  console.log(variant)
  return (
    <Typography
      variant={variant || 'h7'}
      fontWeight={bold ? 'bold' : 'normal'}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default AW_Text;
