const About = () => {
  return (
    <section className="w-[70%] mx-auto p-6 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">About Me</h2>
      <p className="text-gray-700">
        I am currently pursuing a PhD in computer science, with my research
        focused on enhancing online safety and protection for individuals. In
        addition to my academic work, I manage two companies that are dedicated
        to helping people establish an online presence while ensuring their
        digital security. My professional experience spans collaborations with a
        wide range of organizations, from large institutions such as the NHS to
        small, local websites. I am committed to delivering tailored solutions
        that meet clients’ needs on time, while maintaining a professional and
        approachable working relationship. A passionate advocate for universal
        internet access, my academic and professional pursuits are firmly rooted
        in ensuring that the online environment remains safe and secure for all
        users.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills</h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Expertise in web development using JavaScript, Node.js, and React</li>
        <li>Extensive experience with cybersecurity frameworks and tools</li>
        <li>Proficiency in data analysis and machine learning for online safety</li>
        <li>Strong knowledge of Tailwind CSS for creating responsive designs</li>
        <li>Collaboration with diverse teams to deliver high-quality solutions</li>
      </ul>
    </section>
  );
};

export default About;
