// import React from "react";
// import {
//   Drawer,
//   Button,
//   IconButton,
//   Typography,
// } from "@material-tailwind/react";
// import { Xmark } from "iconoir-react";

// export default function DrawerDefault() {
//   const [open, setOpen] = React.useState(false);

//   const openDrawer = () => setOpen(true);
//   const closeDrawer = () => setOpen(false);

//   return (
//     <React.Fragment>
//       {/* @ts-expect-error material-tailwind/react types issue */}
//       <Button {...({ onClick: openDrawer } as any)}>Open Drawer</Button>
//       <Drawer open={open} onClose={closeDrawer} className="p-4" placeholder="">
//         <div className="mb-6 flex items-center justify-between">
//           <Typography variant="h5" color="blue-gray" placeholder="">
//             Material Tailwind
//           </Typography>
//           <IconButton
//             variant="text"
//             color="blue-gray"
//             onClick={closeDrawer}
//             placeholder=""
//           >
//             <Xmark className="h-5 w-5" />
//           </IconButton>
//         </div>
//         <Typography color="gray" className="mb-8 pr-4 font-normal" placeholder="">
//           Material Tailwind features multiple React and HTML components, all
//           written with Tailwind CSS classes and Material Design guidelines.
//         </Typography>
//         <div className="flex gap-2">
//           <Button size="sm" variant="outlined" placeholder="">
//             Documentation
//           </Button>
//           <Button size="sm" placeholder="">
//             Get Started
//           </Button>
//         </div>
//       </Drawer>
//     </React.Fragment>
//   );
// }
