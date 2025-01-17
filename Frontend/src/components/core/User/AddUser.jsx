import UserForm from "../../common/UserForm"


const AddUser = () => {
  return (
      <div className="w-full h-screen">
          <div className="pt-4 text-center text-3xl font-semibold">
              Add User
          </div>
          <div>
              <UserForm/>
          </div>
          
    </div>
  )
}

export default AddUser