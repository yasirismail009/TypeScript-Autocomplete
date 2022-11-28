import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Pligence from "../../Assets/pligence_logo.svg";
import { Link as LinkS } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function SwipeableTemporaryDrawer() {
  const router = useRouter();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem className="flex flex-col" style={{ color: "#173371" }} button>
          <div className="w-full px-4">
            {" "}
            {router.pathname === "/" ? (
              <LinkS
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <p className="w-full text-2xl font-bold mb-2">Menu</p>
              </LinkS>
            ) : (
              <Link href="/">
                <p className="w-full text-2xl font-bold mb-2">Menu</p>
              </Link>
            )}
          </div>
          <div className="w-full mb-2 "></div>
          <div className="w-full px-4">
            <ListItemText>
              {router.pathname === "/" ? (
                <LinkS
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {" "}
                  <div className="flex justify-left items-center  border-b-2 border-primary-dark py-2">
                    {/* <MdOutlineHome className=" text-2xl font-semibold " /> */}
                    <p
                      className=" text-base font-bold m-1"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Home
                    </p>
                  </div>
                </LinkS>
              ) : (
                <Link href="/">
                  <div className="flex justify-left items-center  border-b-2 border-primary-dark py-2">
                    {/* <MdOutlineHome className=" text-2xl font-semibold " /> */}
                    <p
                      className=" text-base font-bold m-1"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Home
                    </p>
                  </div>
                </Link>
              )}
            </ListItemText>
            <ListItemText>
              {router.pathname === "/privacypolicy" ? (
                <Link href="/privacypolicy">
                  <p
                    className="cursor-pointer lg:font-bold lg:text-lg md:text-base sm:text-base sm:font-semibold font-semibold m-1  border-b-2 border-[#ffc200] py-2"
                    style={{ color: "#ffc200" }}
                  >
                    Privacy Policy
                  </p>
                </Link>
              ) : (
                <Link href="/privacypolicy">
                  <p
                    className="cursor-pointer lg:font-bold lg:text-lg md:text-base sm:text-base sm:font-semibold font-semibold m-1  border-b-2 border-primary-dark py-2"
                    style={{ color: "#173371" }}
                  >
                    Privacy Policy
                  </p>
                </Link>
              )}
            </ListItemText>

            <ListItemText>
              {router.pathname === "/termsconditions" ? (
                <Link href="/termsconditions">
                  <p
                    className="cursor-pointer lg:font-bold lg:text-lg md:text-base sm:text-base sm:font-semibold font-semibold m-1  border-b-2 border-[#ffc200] py-2"
                    style={{ color: "#ffc200" }}
                  >
                    Terms & Conditions
                  </p>
                </Link>
              ) : (
                <Link href="/termsconditions">
                  <p
                    className="cursor-pointer lg:font-bold lg:text-lg md:text-base sm:text-base sm:font-semibold font-semibold m-1  border-b-2 border-primary-dark py-2"
                    style={{ color: "#173371" }}
                  >
                    Terms & Conditions
                  </p>
                </Link>
              )}
            </ListItemText>
            <ListItemText>
              {router.pathname === "/License" ? (
                <Link href="/License">
                  <p
                    className="cursor-pointer lg:font-bold lg:text-lg md:text-base sm:text-base sm:font-semibold font-semibold m-1  border-b-2 border-[#ffc200] py-2"
                    style={{ color: "#ffc200" }}
                  >
                    License
                  </p>
                </Link>
              ) : (
                <Link href="/License">
                  <p
                    className="cursor-pointer lg:font-bold lg:text-lg md:text-base sm:text-base sm:font-semibold font-semibold m-1  border-b-2 border-primary-dark py-2"
                    style={{ color: "#173371" }}
                  >
                    License
                  </p>
                </Link>
              )}
            </ListItemText>
            <ListItemText>
              {router.pathname === "/cookiespolicy" ? (
                <Link href="/cookiespolicy">
                  <p
                    className="cursor-pointer text-white lg:font-bold lg:text-lg md:text-base sm:text-base sm:font-semibold font-semibold m-1  border-b-2 border-[#ffc200] py-2"
                    style={{ color: "#ffc200" }}
                  >
                    Cookies Policy
                  </p>
                </Link>
              ) : (
                <Link href="/cookiespolicy">
                  <p
                    className="cursor-pointer text-white lg:font-bold lg:text-lg md:text-base sm:text-base sm:font-semibold font-semibold m-1  border-b-2 border-primary-dark py-2"
                    style={{ color: "#173371" }}
                  >
                    Cookies Policy
                  </p>
                </Link>
              )}
            </ListItemText>
          </div>
          <div className="lg:w-auto md:w-1/4 py-36 lg:hidden md:hidden sm:block block text-center ">
            <p className="text-xs font-bold mb-4">Powered By</p>
            <Image alt="Pligence" src={Pligence} />
          </div>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="lg:hidden md:hidden sm:block block">
      <React.Fragment>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuOpenIcon
            style={{ color: "#173371" }}
            onClick={toggleDrawer("right", true)}
          />
        </IconButton>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
