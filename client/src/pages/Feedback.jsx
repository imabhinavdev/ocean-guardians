import "./styles/feedback.css"

const Feedback = () => {
    return (
      <div className="feed flex items-center justify-center min-h-screen bg-gray-900 conntainer-fluid" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", height:"100vh" }}>
        <div className="glass p-8 w-full max-w-md">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-white ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 glassField"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-white ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 glassField"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-medium text-white ">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full px-3 py-2 glassField"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-white ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 glassField"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full glass-button "
              >
                <span>SUBMIT</span>
                <i></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Feedback;
  
// T