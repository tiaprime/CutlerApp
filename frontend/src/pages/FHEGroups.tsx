'use client';
import styles from '../css/FHEGroups.module.css';
import Header from '../Components/Header';
import BackButton from '../Components/BackButton';
import GroupCard from '../Components/GroupCard';
import BottomNavigation from '../Components/BottomNavigation';
import { Member } from '../types/member';
import { Calling } from '../types/calling';
import { useState, useEffect } from 'react';

function FHEGroups() {
  const [members, setMembers] = useState<Member[]>([]);
  const [callings, setCallings] = useState<Calling[]>([]);

  // get member and calling info from the two individual APIs
  useEffect(() => {
    const fetchData = async () => {
      const memberResponse = await fetch('https://localhost:5000/api/Member');
      const callingResponse = await fetch('https://localhost:5000/api/Calling');

      const memberData = await memberResponse.json();
      const callingData = await callingResponse.json();

      setMembers(memberData);
      setCallings(callingData);
    };
    fetchData();
  }, []);

  // join members and callings on callingId
  const memberCallings = members.map((m) => {
    const calling = callings.find((c) => m.callingId === c.callingId); // Match callingId

    return {
      ...m, // Spread the member data
      callingName: calling ? calling.callingName : 'Unknown', // Add callingName or default to 'Unknown'
    };
  });

  // Group members by fheGroupId
  const groupedMembers: { [key: number]: Member[] } = {};
  memberCallings.forEach((member) => {
    if (!groupedMembers[member.fheGroupId]) {
      groupedMembers[member.fheGroupId] = [];
    }
    groupedMembers[member.fheGroupId].push(member);
  });

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
          {Object.entries(groupedMembers).map(([groupId, members]) => {
            // Identify leaders (Adjust the condition if needed)
            const leaders = members
              .filter((m) => {
                const calling = callings.find(
                  (c) => c.callingId === m.callingId
                );
                return (
                  calling && calling.callingName.includes('FHE Group Leader')
                );
              })
              .map((l, index) => {
                const calling = callings.find(
                  (c) => c.callingId === l.callingId
                );
                return `Group Leader ${index + 1}: ${l.firstName} ${l.lastName}`;
              });

            const nonLeaders = members
              .filter((m) => {
                const calling = callings.find(
                  (c) => c.callingId === m.callingId
                );
                return (
                  !calling || !calling.callingName.includes('FHE Group Leader')
                ); // Exclude leaders, include others
              })
              .map((m) => `${m.firstName} ${m.lastName}`);

            return (
              <GroupCard
                key={groupId}
                groupNumber={parseInt(groupId)}
                leaders={leaders.length ? leaders : ['No assigned leaders']}
                members={
                  nonLeaders.length ? nonLeaders : ['No assigned members']
                } // ✅ Pass only non-leaders
                hasMembers={nonLeaders.length > 0} // ✅ Check if non-leader members exist
              />
            );
          })}
        </section>

        <BottomNavigation />
      </main>
    </>
  );
}

export default FHEGroups;
