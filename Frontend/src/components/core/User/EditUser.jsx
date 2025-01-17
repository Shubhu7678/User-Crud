import UserForm from "../../common/UserForm"


const EditUser = () => {
  return (
    <div className="w-full h-screen">
          <div className="pt-4 text-center text-3xl font-semibold">
              Edit User
          </div>
          <div>
              <UserForm/>
          </div>
          
    </div>
  )
}

export default EditUser