// Projects data collection
const projects = [
    {
        id: 'project1-details',
        title: 'General Purpose Adjustable Bipolar DC Voltage Supply',
        description: 'This is a stable and adjustable power supply delivering up to 250mA. Utilizes 3-terminal linear voltage regulators and half-wave rectifiers.',
        imgSrc: 'images/Voltage_Supply_Project_BreadBoard.jpeg',
        alt: 'General Purpose Adjustable Bipolar DC Voltage Supply',
        fullDescription: 'This project involved designing a stable and precise voltage supply...',
        technologies: ['Circuit Design', 'PCB Layout', 'Electronics'],
        githubLink: 'https://github.com/username/voltage-supply',
        demoLink: '#'
    },
    {
        id: 'project2-details',
        title: 'Event Service Framework for an Autonomous Robot',
        description: 'The project focuses on writing embedded software for event-driven control of the robot, modeled after a Roach, using an Event Service Framework.',
        imgSrc: 'images/RoachImage.jpeg',
        alt: 'Event Service Framework for an Autonomous Robot',
        fullDescription: 'This project demonstrates advanced programming concepts using hierarchical state machines...',
        technologies: ['C', 'State Machines', 'Embedded Systems'],
        githubLink: 'https://github.com/username/roach-hsm',
        demoLink: 'assets/HSM_demo.mp4'
    },
    {
        id: 'project3-details',
        title: 'Rock Climbing Tracker',
        description: 'Uses a 9-DOF IMU sensor data to track 3-D displacement and graph the movement using MatLab',
        imgSrc: 'images/Rock_Climbing_Tracker_Test.jpeg',
        alt: 'Rock Climbing Tracker',
        fullDescription: 'This application helps climbers track their progress, analyze their performance...',
        technologies: ['Python', 'Data Analysis', 'Mobile Development'],
        githubLink: 'https://github.com/username/climbing-tracker',
        demoLink: 'assets/Rock_Climbing_Project.pdf'
    },
    {
        id: 'project4-details',
        title: 'Osmosis game using BASYS3 board and Verilog',
        description: 'This interactive game, uses a BASYS3 board and VGA monitor to simulate the movement of red and blue molecules across a membrane allowing the player to sort the molecules by changing the color of the membrane. Utilizing Verilog for game logic, the design challenges included generating VGA signals, manipulating RGB data, and implementing responsive game controls via physical buttons on the board.',
        imgSrc: 'images/BaysisOsmosisGame.jpeg',
        alt: 'Osmosis game using BASYS3 board and Verilog',
        fullDescription: 'This educational game makes learning about cellular processes engaging and interactive...',
        technologies: ['Verilog', 'FPGA', 'VGA', 'Digital Design'],
        githubLink: 'https://github.com/username/baysis-osmosis',
        demoLink: '#'
    },
    {
        id: 'project5-details',
        title: 'Autonomous Ball-Collecting Robot',
        description: 'Designed and built for the ECE-118 Mechatronics course under Professor Gabriel Hugh Elkaim, this autonomous robot navigates a designated field to collect and deposit 25mm chrome balls, utilizing bumpers and tape sensors for precise movement and effective ball handling within a competitive two-minute round.',
        imgSrc: 'images/Autonomous_Robot_Mechatronics.jpg',
        alt: 'Autonomous Ball-Collecting Robot',
        fullDescription: 'This project involved creating an autonomous robot capable of navigating through complex environments...',
        technologies: ['Arduino', 'C++', 'Sensors', 'Control Systems'],
        githubLink: 'https://github.com/username/autonomous-robot',
        demoLink: 'assets/Lab_0_ECE118.pdf'
    },
    {
        id: 'project6-details',
        title: 'Lab Systems',
        description: 'Various laboratory systems and experiments conducted during academic studies.',
        imgSrc: 'images/Roach_Lab_Report_Cover.png',
        alt: 'Laboratory Systems Documentation',
        fullDescription: 'Collection of laboratory work showcasing various engineering principles...',
        technologies: ['Various', 'Laboratory Equipment', 'Data Analysis'],
        githubLink: 'https://github.com/username/lab-systems',
        demoLink: '#'
    }
];
