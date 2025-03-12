import React from 'react';
import styles from './WardDashboard.module.css';

interface CardContainerProps {
  title?: string;
  items?: Array<{
    id: string;
    title: string;
    date?: string;
    description?: string;
  }>;
}

const CardContainer: React.FC<CardContainerProps> = ({
  title = 'Upcoming Events',
  items = [
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
  ],
}) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <ul className={styles.cardList}>
        {items.map((item) => (
          <li key={item.id} className={styles.cardItem}>
            <div className={styles.cardItemHeader}>
              <h4 className={styles.cardItemTitle}>{item.title}</h4>
              {item.date && (
                <span className={styles.cardItemDate}>{item.date}</span>
              )}
            </div>
            {item.description && (
              <p className={styles.cardItemDescription}>{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default CardContainer;
