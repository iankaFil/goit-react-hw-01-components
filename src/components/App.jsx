import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../data/user.json';
// import friends from '../data/friends.json';
// import transactions from '../data/transactions.json';
import data from '../data/data.json';

const { username, tag, location, avatar, stats } = user;
export const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </>
  );
};
