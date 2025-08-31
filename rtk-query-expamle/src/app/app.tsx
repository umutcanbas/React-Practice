import { useGetUsersQuery, useAddUserMutation } from "./api";

const App = () => {
  const { data: users } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();

  /*  const handleAddUser = async () => {
    const name = prompt("Enter user name:");
    if (name) {
      try {
        await addUser(name).unwrap();
        refetch(); // Kullanıcı eklendikten sonra listeyi güncelle
      } catch (e) {
        alert("Kullanıcı eklenirken hata oluştu");
      }
    }
  }; */

  const handleAddUser = () => {
    addUser({
      name: "aaa",
    });
  };

  return (
    <div>
      <button onClick={handleAddUser}>Add User</button>
      <ul>{users?.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
};

export default App;
