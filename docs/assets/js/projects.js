// Projects data collection
const projects = [
    {
        id: 'project1-details',
        filename: 'DC_Supply.html',
        title: 'General Purpose Adjustable Bipolar DC Voltage Supply',
        description: 'This is a stable and adjustable power supply delivering up to 250mA. Utilizes 3-terminal linear voltage regulators and half-wave rectifiers.',
        imgSrc: 'assets/images/Voltage_Supply_Project_BreadBoard.jpeg',
        alt: 'General Purpose Adjustable Bipolar DC Voltage Supply',
        fullDescription: 'This project involved designing a stable and precise voltage supply...',
        technologies: ['Circuit Design', 'PCB Layout', 'Electronics'],
        githubLink: 'https://github.com/username/voltage-supply',
        demoLink: '#'
    },
    {
        id: 'project2-details',
        filename: 'Event_Service_Framework.html',
        title: 'Event Service Framework for an Autonomous Robot',
        description: 'The project focuses on writing embedded software for event-driven control of the robot, modeled after a Roach, using an Event Service Framework.',
        imgSrc: 'assets/images/RoachImage.jpeg',
        alt: 'Event Service Framework for an Autonomous Robot',
        fullDescription: 'This project demonstrates advanced programming concepts using hierarchical state machines...',
        technologies: ['C', 'State Machines', 'Embedded Systems'],
        githubLink: 'https://github.com/username/roach-hsm',
        demoLink: 'assets/HSM_demo.mp4'
    },
    {
        id: 'project3-details',
        filename: 'Rock_Climbing_Tracker.html',
        title: 'Rock Climbing Tracker',
        description: 'Uses a 9-DOF IMU sensor data to track 3-D displacement and graph the movement using MatLab',
        imgSrc: 'assets/images/Rock_Climbing_Tracker_Test.jpeg',
        alt: 'Rock Climbing Tracker',
        fullDescription: 'This application helps climbers track their progress, analyze their performance...',
        technologies: ['Python', 'Data Analysis', 'Mobile Development'],
        githubLink: 'https://github.com/username/climbing-tracker',
        demoLink: 'assets/Reports_PDFs/Rock_Climbing_Project.pdf'
    },
    {
        id: 'project4-details',
        filename: 'Osmosis_Game.html',
        title: 'Osmosis game using BASYS3 board and Verilog',
        description: 'This interactive game, uses a BASYS3 board and VGA monitor to simulate the movement of red and blue molecules across a membrane allowing the player to sort the molecules by changing the color of the membrane. Utilizing Verilog for game logic, the design challenges included generating VGA signals, manipulating RGB data, and implementing responsive game controls via physical buttons on the board.',
        imgSrc: 'assets/images/BaysisOsmosisGame.jpeg',
        alt: 'Osmosis game using BASYS3 board and Verilog',
        fullDescription: 'This educational game makes learning about cellular processes engaging and interactive...',
        technologies: ['Verilog', 'FPGA', 'VGA', 'Digital Design'],
        githubLink: 'https://github.com/username/baysis-osmosis',
        demoLink: '#'
    },
    {
        id: 'project5-details',
        filename: 'Autonomous_Robot.html',
        title: 'Autonomous Ball-Collecting Robot',
        description: 'Designed and built for the ECE-118 Mechatronics course under Professor Gabriel Hugh Elkaim, this autonomous robot navigates a designated field to collect and deposit 25mm chrome balls, utilizing bumpers and tape sensors for precise movement and effective ball handling within a competitive two-minute round.',
        imgSrc: 'assets/images/Autonomous_Robot_Mechatronics.jpg',
        alt: 'Autonomous Ball-Collecting Robot',
        fullDescription: 'This project involved creating an autonomous robot capable of navigating through complex environments...',
        technologies: ['Arduino', 'C++', 'Sensors', 'Control Systems'],
        githubLink: 'https://github.com/username/autonomous-robot',
        demoLink: 'assets/Reports_PDFs/Lab_0_ECE118.pdf'
    },
    {
        id: "project6-details",
        filename: "Wet_Dry.html",
        title: "Wet/Dry Cycling System",
        description: "An automated device that simulates prebiotic hydrothermal pools to study RNA polymerization, developed in collaboration with Professor David Deamer at UCSC.",
        imgSrc: "assets/images/Deamer_Device_Setup_Lab.jpg",
        alt: "Wet/Dry Cycling System installed in Deamer's laboratory",
        fullDescription: "This project involved creating an automated wet/dry cycling device to simulate prebiotic conditions for RNA polymerization research.",
        technologies: ["Embedded Systems", "Engineering Leadership", "Hardware Design", "Web Interface"],
        githubLink: "#",
        demoLink: "#"
    }
];
