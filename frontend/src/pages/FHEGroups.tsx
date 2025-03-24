'use client';
import styles from '../css/FHEGroups.module.css';
import Header from '../Components/Header';
import BackButton from '../Components/BackButton';
import GroupCard from '../Components/GroupCard';
import BottomNavigation from '../Components/BottomNavigation';
import { Member } from '../types/member';

function FHEGroups() {
  /* 
  const [members, setMembers] = useState<Member[]>([]);
  const [callings, setCallings] = useState<Calling[]>([]);

  // get member and calling info from the two individual APIs
  useEffect(() => {
    const fetchData = async () => {
      const memberResponse = await fetch('https://localhost:5000/api/Member');
      const callingResponse = await fetch('http://localhost:4000/api/Calling');

      const memberData = await memberResponse.json();
      const callingData = await callingResponse.json();

      setMembers(memberData);
      setCallings(callingData);
    };
    fetchData();
  }, []);

  // join members and callings on callingId
  const combinedData = members.map((Mebmer) => {
    const team = callings.find((c) => {
      return c.callingId === Member.callingId; // Match callingId
    });

    return {
      ...Mebmer,
      callingName: Calling ? Calling.callingName : 'Unknown', // Add callingName or default to 'Unknown'
    };
  });

 */

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
        <BottomNavigation />{' '}
      </main>
    </>
  );
}

export default FHEGroups;
