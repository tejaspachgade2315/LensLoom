import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="w-full h-screen z-10 object-cover">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h3 className="h2">Look like you're lost</h3>
        <p>the page you are looking for not avaible!</p>
        <a
          href="/sign-up"
          className="bg-green-500 px-2 py-3 border-1 rounded-lg"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
