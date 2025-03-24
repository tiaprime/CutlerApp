'use client';
import styles from '../css/FHEGroups.module.css';
import Header from '../Components/Header';
import BackButton from '../Components/BackButton';
import GroupCard from '../Components/GroupCard';
import BottomNavigation from '../Components/BottomNavigation';

function FHEGroups() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Inria+Serif:wght@700&family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <main className={styles.container}>
        <Header />
        <BackButton />
        <h1 className={styles.title}>FHE Groups</h1>
        <section className={styles.groupsContainer}>
          <GroupCard
            groupNumber={1}
            leaders={['Leader 1:', 'Leader 2:']}
            hasMembers={true}
          />
          <GroupCard
            groupNumber={2}
            leaders={['Leader 1:', 'Leader 2:']}
            hasMembers={true}
          />
          <GroupCard
            groupNumber={3}
            leaders={['Leader 1:', 'Leader 2:']}
            hasMembers={true}
          />
        </section>
        <BottomNavigation />
      </main>
    </>
  );
}

export default FHEGroups;
