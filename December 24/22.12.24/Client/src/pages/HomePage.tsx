import PostsList from "@/components/PostsList";
import MyDialog from "@/components/ui/MyDialog";

function HomePage() {
  return (
    <div>
      <div>
        <MyDialog />
      </div>
      <PostsList />
    </div>
  );
}

export default HomePage;
