import React from 'react';
import styles from './WardDashboard.module.css';
import { useNavigate } from 'react-router-dom';

const BottomNavigation: React.FC = () => {
  return (
    <nav className={styles.bottomNav}>
      <button className={styles.navButton} aria-label="Home">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[23px] h-[23px]"> <path d="M13.5456 1.72398L13.5461 1.72436L20.1633 6.35411C20.1634 6.35415 20.1634 6.35418 20.1635 6.35422C20.6337 6.68346 21.1031 7.24354 21.4558 7.91912C21.8085 8.59476 22 9.30057 22 9.87748V17.6667C22 20.044 20.0696 21.9744 17.6923 21.9744H5.3077C2.93322 21.9744 1 20.0353 1 17.6552V9.72813C1 9.19551 1.17267 8.52594 1.49455 7.8722C1.81616 7.21902 2.24416 6.66817 2.67148 6.33487L2.67169 6.3347L8.4247 1.84482C8.42512 1.84449 8.42555 1.84416 8.42598 1.84383C9.81439 0.769067 12.1013 0.712069 13.5456 1.72398ZM11.5 20.2406C12.5233 20.2406 13.3616 19.4023 13.3616 18.379V14.9324C13.3616 13.9091 12.5233 13.0708 11.5 13.0708C10.4767 13.0708 9.63834 13.9091 9.63834 14.9324V18.379C9.63834 19.4023 10.4767 20.2406 11.5 20.2406Z" fill="#848282" fill-opacity="0.4" stroke="black" stroke-width="2"></path> </svg>',
          }}
        />
      </button>
      <button className={styles.navButton} aria-label="Calendar">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[22px] h-[22px]"> <path d="M14.6667 1.83331V5.49998M7.33333 1.83331V5.49998M2.75 9.16665H19.25M4.58333 3.66665H17.4167C18.4292 3.66665 19.25 4.48746 19.25 5.49998V18.3333C19.25 19.3458 18.4292 20.1666 17.4167 20.1666H4.58333C3.57081 20.1666 2.75 19.3458 2.75 18.3333V5.49998C2.75 4.48746 3.57081 3.66665 4.58333 3.66665Z" stroke="#848282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
          }}
        />
      </button>
      <button className={styles.navButton} aria-label="Menu">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[21px] h-[20px]"> <path d="M3 10H18M3 5H18M3 15H18" stroke="#848282" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
          }}
        />
      </button>
      <button className={styles.navButton} aria-label="Profile">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[24px]"> <path d="M9.08496 11.1862C6.00146 11.1862 3.49186 8.6766 3.49186 5.5931C3.49186 2.5096 6.00146 0 9.08496 0C12.1685 0 14.6781 2.5096 14.6781 5.5931C14.6781 8.6766 12.1685 11.1862 9.08496 11.1862ZM9.08496 1.45907C6.80881 1.45907 4.95093 3.31695 4.95093 5.5931C4.95093 7.86925 6.80881 9.72713 9.08496 9.72713C11.3611 9.72713 13.219 7.86925 13.219 5.5931C13.219 3.31695 11.3611 1.45907 9.08496 1.45907Z" fill="#848282"></path> <path d="M17.4407 20.9133C17.0419 20.9133 16.7112 20.5826 16.7112 20.1838C16.7112 16.8279 13.2873 14.1043 9.08518 14.1043C4.88301 14.1043 1.45907 16.8279 1.45907 20.1838C1.45907 20.5826 1.12835 20.9133 0.729535 20.9133C0.330723 20.9133 0 20.5826 0 20.1838C0 16.0303 4.07566 12.6453 9.08518 12.6453C14.0947 12.6453 18.1702 16.0303 18.1702 20.1838C18.1702 20.5826 17.8395 20.9133 17.4407 20.9133Z" fill="#848282"></path> <path d="M17.4407 19.2526C17.0419 19.2526 16.7112 19.5834 16.7112 19.9822C16.7112 23.338 11.3879 22.7837 9.08518 22.7837C6.78246 22.7837 1.45907 23.338 1.45907 19.9822C1.45907 19.5834 1.12835 19.2526 0.729535 19.2526C0.330723 19.2526 0 19.5834 0 19.9822C0 24.1357 4.07566 23.9995 9.08518 23.9995C14.0947 23.9995 18.1702 24.1357 18.1702 19.9822C18.1702 19.5834 17.8395 19.2526 17.4407 19.2526Z" fill="#848282"></path> </svg>',
          }}
        />
      </button>
    </nav>
  );
};

export default BottomNavigation;
