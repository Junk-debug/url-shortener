// import { Toaster } from "@/components/ui/toaster";
import "../styles/globals.css";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         {children}
//         <Toaster />
//       </body>
//     </html>
//   );
// }

import type React from "react"
import { Toaster } from "sonner"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}





// // import "../styles/globals.css";
// // import { Toaster } from "@/components/ui/toaster";

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <html lang="en">
// //       <body>
// //         {children}
// //         <Toaster />
// //       </body>
// //     </html>
// //   );
// // }
