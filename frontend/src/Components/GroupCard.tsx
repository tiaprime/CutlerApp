'use client';
import React from 'react';
import styles from '../css/GroupCard.module.css';

interface GroupCardProps {
  groupNumber: number;
  leaders: string[];
  members: string[]; // Include the members property
  hasMembers: boolean;
}

const GroupCard: React.FC<GroupCardProps> = ({
  groupNumber,
  leaders,
  members,
  hasMembers,
}) => {
  return (
    <article className={styles.groupCard}>
      <h2 className={styles.groupTitle}>Group {groupNumber}:</h2>
      <div className={styles.groupContent}>
        {leaders.map((leader, index) => (
          <p key={index} className={styles.leaderText}>
            {leader}
          </p>
        ))}
        {hasMembers && (
          <>
            <p className={styles.membersText}>Members:</p>
            <div >
              {members.map((member, index) => (
                <p key={index} className={styles.memberName}>
                  {member}
                </p>
              ))}
            </div>
          </>
        )}
        <button className={styles.editButton}>Edit</button>
      </div>
    </article>
  );
};

export default GroupCard;
