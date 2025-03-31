import { Member } from './types/member';
import { useEffect, useState } from 'react';

function MemberList() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('https://localhost:5000/api/Ward');
      const data = await response.json();
      setMembers(data);
    };

    fetchProjects();
  }, []);

  return (
    <>
      <h1>Members</h1>
      <br />
      {members.map((m) => (
        <div key={m.memberId}>
          <h3>{m.firstName}</h3>
          <ul>
            <li>
              Name: {m.firstName}
              {m.lastName}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default MemberList;
