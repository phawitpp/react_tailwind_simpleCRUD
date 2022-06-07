import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Alert,Toast} from "flowbite-react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    window.scrollTo(0,0);
    axios
      .get("https://www.mecallapi.com/api/users")
      .then((res) => setData(res.data));
  }, []);

  const deleteUser = (id) => {
    let data = {
      id: id,
    };
    axios
      .delete("https://www.mecallapi.com/api/users/delete/", { data })
      .then((res) => {
        alert(res.data.message);
        if (res.data.status === "ok") {
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const edituser = (id) => {
    window.location.href = `/edit/${id}`;
  };
  const invokeSw = () => {};
  return (
    <div className="container mx-auto my-16 border border-slate-100 p-10">
      <div className="mb-4 flex flex-col align-middle justify-center items-center gap-4">
        <Player
          autoplay
          loop
          src="https://assets7.lottiefiles.com/packages/lf20_bo8vqwyw.json"
          style={{ height: "10rem", width: "10rem" }}
        ></Player>
        <span className=" font-sans font-bold text-3xl"> USER LIST</span>
        <Link to="/create">
          <button className="btn-create float-right block">Create</button>
        </Link>
      </div>
      <div>
        <Table>
          <Table.Head className=" overflow-hidden">
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>Avatar</Table.HeadCell>
            <Table.HeadCell>Firstname</Table.HeadCell>
            <Table.HeadCell>Lastname</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className=" divide-y">
            {data != null &&
              data.map((info) => {
                return (
                  <Table.Row key={info.id} className="hover:bg-slate-100">
                    <Table.Cell>{info.id}</Table.Cell>
                    <Table.Cell>
                      <img
                        src={info.avatar}
                        alt="avatar"
                        className="h-8 w-8 rounded-full"
                      />
                    </Table.Cell>
                    <Table.Cell>{info.fname}</Table.Cell>
                    <Table.Cell>{info.lname}</Table.Cell>
                    <Table.Cell>{info.username}</Table.Cell>
                    <Table.Cell className="group flex gap-2">
                      <button
                        className="btn-edit"
                        onClick={() => {
                          edituser(info.id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => {
                          deleteUser(info.id);
                        }}
                      >
                        Delete
                      </button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};
export default HomeComponent;
