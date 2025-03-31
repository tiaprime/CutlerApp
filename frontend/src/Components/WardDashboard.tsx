'use client';
import React from 'react';
import styles from './WardDashboard.module.css';
import SearchBar from './SearchBar';
import ActionButtons from './ActionButtons';
import CardContainer from './CardContainer';
import NewsCard from './NewsCard';
import BottomNavigation from './BottomNavigation';

const WardDashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.contentSection}>
        <h1 className={styles.wardTitle}>Ward 92</h1>

        <SearchBar />

        <ActionButtons />

        <div className={styles.cardGrid}>
          <CardContainer
            title="Upcoming Events"
            items={[
              {
                id: '1',
                title: 'Ward Council Meeting',
                date: 'Sunday, 9:00 AM',
                description: 'Weekly coordination meeting for ward leadership',
              },
              {
                id: '2',
                title: 'Relief Society Activity',
                date: 'Tuesday, 7:00 PM',
                description: 'Service project and refreshments',
              },
              {
                id: '3',
                title: 'Youth Activity',
                date: 'Wednesday, 7:00 PM',
                description: 'Games and spiritual message',
              },
            ]}
          />
          <CardContainer
            title="Ward Announcements"
            items={[
              {
                id: '1',
                title: 'Fast Sunday',
                date: 'This Sunday',
                description:
                  'Please remember this Sunday is our monthly fast and testimony meeting',
              },
              {
                id: '2',
                title: 'Temple Trip',
                date: 'October 15',
                description:
                  'Ward temple trip scheduled. Sign up with the executive secretary',
              },
              {
                id: '3',
                title: 'Service Project',
                date: 'October 22',
                description:
                  'Community cleanup project. Meet at the church at 9:00 AM',
              },
            ]}
          />
        </div>

        <NewsCard title="Church News" location="Salt Lake Temple" />
      </div>

      <BottomNavigation />
    </div>
  );
};

export default WardDashboard;
