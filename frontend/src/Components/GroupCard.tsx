"use client";
import React from "react";
import styles from "./GroupCard.module.css";

interface GroupCardProps {
  groupNumber: number;
  leaders: string[];
  hasMembers: boolean;
}

const GroupCard: React.FC<GroupCardProps> = ({
  groupNumber,
  leaders,
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
        {hasMembers && <p className={styles.membersText}>Members:</p>}
        <button className={styles.editButton}>Edit</button>
      </div>
    </article>
  );
};

export default GroupCard;
