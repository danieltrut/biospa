import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#fff",
    height: 80,
    paddingLeft: "2rem",
    paddingRight: "2rem",
    display: 'flex',
    justifyContent: "space-between",
    margin: "auto",
    alignContent: "center",
    alignItems: "center",
    paddingRight: "30px",
    paddingLeft: "30px"
  },

  logo: {
    cursor: "pointer",
    marginTop: 5,
    marginRight: 40,
  },

  containerTt: {
   maxWidth: "1200px",
   width: "100%", 
   paddingRight: "28px",
   paddingLeft: "28px"
  },

  section: {
    marginLeft: "-17px"
  },

  logolinks: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100vw",
    marginRight: "-17px"
  },

  navlinks: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: -15
  },

  link: {
    textDecoration: "none",
    color: "#585c69",
    fontSize: "16px",
    marginLeft: 15,
    marginRight: 15,
    marginTop: "10px",
    letterSpacing: "0.04071em"
  },

  "&:hover": {
    color: "#72bb94",
    borderBottom: "1px solid white",
  },

  loginout: {
    color: "#72bb94 !important",
  },

  button: {
    backgroundColor: "#72bb94 !important",
  },
  languages: {
    marginLeft: 50,
    marginRight: 50,
  },
}));
