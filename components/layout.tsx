// import "../styles/global.css"
// import Favicon from '../../public/assets/images/logo-trans.png';
import { ReduxProvider } from "@/redux/provider";
import GlobalNavigation from "../components/global-navigation";

// export const metadata = {
//     title: 'Game Town',
//     description: 'Generated by Next.js',
//     icons:[{rel: 'icon', url: Favicon.src}]
//   }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      // <html lang="en">
      //   <body>
          <ReduxProvider>
              <GlobalNavigation/>
              {children}
          </ReduxProvider>
      //   </body>
      // </html>
    )
  }
  