import { getServerSession } from "next-auth";
import CreateProfileForm from "../components/CreateProfileForm";

const ProfileForm: React.FC = async () => {
  return (
    <div>
      <CreateProfileForm />
    </div>
  );
};

export default ProfileForm;
