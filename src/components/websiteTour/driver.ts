import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import Swal from "sweetalert2";
import { videoActions } from "../store/slices/videoSlice/videoSlice";

export const sweetAlertPopup = (dispatch: any, router: any) => {
  const driverObj: any = driver({
    showProgress: true,
    steps: [
      {
        element: ".Profile",
        popover: {
          title: "Step 1",
          description: "You are on profile page",
          side: "left",
          align: "start",
        },
      },
      {
        element: ".introduction-video",
        popover: {
          title: "Introduction Video",
          description:
            "Here you can see my introduction about personal and professional",
          side: "top",
          align: "start",
        },
      },
      {
        element: ".Play",
        popover: {
          title: "Exploring Area",
          description: "Please click on Play Area tab and press Next",
          side: "bottom",
          align: "start",
          onNextClick: () => {
            router.push("/playarea");
            setTimeout(() => {
              driverObj.moveNext();
            }, 2000);
          },
          onPrevClick: () => {
            router.push("/");
            setTimeout(() => {
              driverObj.movePrevious();
            }, 2000);
          },
        },
      },
      {
        element: "#play-card4",
        popover: {
          title: "Customize this Website",
          description:
            "You can do whatever you want to with this website with the configuration tool",
          side: "left",
          align: "start",
        },
      },
    ],
  });

  Swal.fire({
    text: "May I take you to the tour of this website",
    icon: "question",
    confirmButtonColor: "Green",
    confirmButtonText: "Yes, Please",
    denyButtonText: "No",
    showDenyButton: true,
    focusConfirm: false,
  }).then((result) => {
    dispatch(videoActions.setFirstTime(true));
    if (result.isConfirmed) {
      Swal.fire({
        text: "Thank you!, lets tour",
        confirmButtonText: "Lets tour",
      }).then((result) => {
        if (result.isConfirmed) {
          driverObj.drive();
        }
      });
    }
  });
};
