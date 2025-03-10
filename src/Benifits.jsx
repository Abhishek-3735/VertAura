import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faLightbulb, faSmile, faLeaf, faIndustry, faHeart } from "@fortawesome/free-solid-svg-icons";

const Benefits = () => {
  // creating an benifits object
  const benefits = [
    {
      title: "Enhances Air Quality",
      description: "Plants act as natural air purifiers, removing toxins and increasing oxygen levels.",
      icon: <FontAwesomeIcon icon={faWind} className="text-green-500 text-3xl" />,
    },
    {
      title: "Boosts Productivity & Focus",
      description: "Green workspaces improve concentration, creativity, and overall work efficiency.",
      icon: <FontAwesomeIcon icon={faLightbulb} className="text-green-500 text-3xl" />,
    },
    {
      title: "Reduces Stress & Improves Well-being",
      description: "Indoor plants help lower anxiety, promote relaxation, and enhance mental health.",
      icon: <FontAwesomeIcon icon={faSmile} className="text-green-500 text-3xl" />,
    },
    {
      title: "Enhanced Aesthetics",
      description: "Greenery, including green walls, can transform the workspace, making it visually appealing and a more pleasant place to work.",
      icon: <FontAwesomeIcon icon={faLeaf} className="text-green-500 text-3xl" />,
    },
    {
      title: "Energy Efficiency",
      description: "Green walls and plants help insulate office spaces, reducing the need for excessive heating or cooling and lowering energy costs.",
      icon: <FontAwesomeIcon icon={faIndustry} className="text-green-500 text-3xl" />,
    },
    {
      title: "Better Health and Well-being",
      description: "Indoor plants contribute to improved mental and physical health by reducing stress, lowering blood pressure, and improving overall mood.",
      icon: <FontAwesomeIcon icon={faHeart} className="text-green-500 text-3xl" />,
    },
  ];

  return (
    <div className="flex flex-col items-center text-center px-6 py-12">
      <h2 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-5 text-transparent bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-clip-text animate-[shine_2s_linear_infinite]">
        Benefits of Greener Workspaces
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
        {/* using map function to align the benifits for a proper order */}
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-300 mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">{benefit.title}</h3>
            <p className="text-gray-400">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
