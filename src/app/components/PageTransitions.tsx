// "use client";

// import { useEffect, useState, ReactNode } from 'react';
// import { usePathname } from 'next/navigation';
// import styles from '../PageTransition.module.css';

// interface PageTransitionProps {
//   children: ReactNode;
// }

// const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
//   const pathname = usePathname(); // Current route
//   const [currentChildren, setCurrentChildren] = useState<ReactNode>(children); // Stages the current page
//   const [isTransitioning, setIsTransitioning] = useState(false); // Tracks animation state

//   useEffect(() => {
//     setIsTransitioning(true); // Start fade-out animation

//     const timeout = setTimeout(() => {
//       setCurrentChildren(children); // Update content to the new page
//       setIsTransitioning(false); // Trigger fade-in animation
//     }, 500); // Match CSS transition duration

//     return () => clearTimeout(timeout);
//   }, [pathname, children]); // Trigger on route change

//   return (
//     <div
//       className={`${styles.pageWrapper} ${
//         isTransitioning ? styles.fadeOut : styles.fadeIn
//       }`}
//     >
//       {currentChildren}
//     </div>
//   );
// };

// export default PageTransition;
