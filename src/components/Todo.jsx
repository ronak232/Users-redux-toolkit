import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateName, getTodos } from "../Features/Reducer";
function Todo() {
  const { value, isLoading } = useSelector((state) => state.userReducer);
  // console.log(user);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setnewUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: Date.now(), name, username }));
    setName("");
    setUsername("");
  };

  useEffect(() => {
    dispatch(getTodos());
    // handleSubmit();
  }, [dispatch]);

  // console.log(newUsername);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <section>
      <div className="card col-md-4 container my-3">
        <form action="" onSubmit={handleSubmit}>
          <h5 className="card-title">User</h5>
          <div className="card-body d-flex justify-content-between align-items-center mx-2 ">
            <div className="d-block">
              <label htmlFor="">Name</label>
              <input
                type="text"
                className="d-block border border-dark"
                //   ref={focusRef}
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                autoFocus
              />
              <label htmlFor="">Username</label>
              <input
                type="text"
                className="d-block border border-dark"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div>
              <button className="btn btn-primary btn-sm mx-2 my-2">
                Add User
              </button>
            </div>
          </div>
          <div className="todoslength">
            {/* Total user in the list - {value.length} */}
          </div>
        </form>
      </div>
      <div className="container text-center my-4">
        <div className="row w-100">
          {value.length === 0 ? (
            <div>No item in the list</div>
          ) : (
            value.map((user) => {
              return (
                <div className="col-md-3 my-3" key={user.id}>
                  <div className="card">
                    <div className="card-body">
                      <h4>Name - {user.name}</h4>
                      <h4>Username - {user.username}</h4>
                      <div>
                        <input
                          type="text"
                          placeholder="Update Name."
                          onChange={(event) => {
                            setnewUsername(event.target.value);
                          }}
                        />
                        <div>
                          <button
                            className="btn btn-sm btn-danger mx-2"
                            onClick={() => dispatch(deleteUser(user.id))}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-primary btn-sm my-2"
                            onClick={() =>
                              dispatch(
                                updateName({ ...user, name: newUsername })
                              )
                            }
                          >
                            Update Name
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default Todo;
