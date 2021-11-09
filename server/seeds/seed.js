const mongoose = require("mongoose");
const { User, TokenEmailVerification, Subject } = require("../models");
const bcrypt = require("bcrypt");
require("dotenv").config();

//get mongoose connection object
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/" + process.env.DB_NAME,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    }
);

//sync index on startup to ensure token expirations happen
const syncIndexes = async () => {
    await TokenEmailVerification.syncIndexes();
    await User.syncIndexes();
};
syncIndexes();

//hash password function for seed passwords
const hashPassword = (password) => {
    return bcrypt.hashSync(password, 10);
};

//data object to be inserted in to db
const userSeed = [
    {
        username: "Admin Man",
        email: "admin@upstudy.io",
        password: hashPassword("12345"),
        isVerified: false,
        roles: [{ role: "admin" }, { role: "user" }],
        savedBooks: [],
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        username: "Mod Buddy",
        email: "mod@upstudy.io",
        password: hashPassword("12345"),
        isVerified: false,
        roles: [
            {
                role: "mod",
                associatedIds: [
                    "mongo generated id #1",
                    "mongo generated id #2",
                ],
            },
            { role: "user" },
        ],
        savedBooks: [],
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        username: "User Dude",
        email: "user@upstudy.io",
        password: hashPassword("12345"),
        isVerified: false,
        savedBooks: [],
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

const subjectSeed = [
    {
        name: "Computer Science",
        description:
            "Computer science is the study of computers and computing as well as their theoretical and practical applications.",
        image: "https://i.imgur.com/0dqdq3m.jpeg",
        bgColor: "#758262",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Software Development",
        description:
            "Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Process_and_data_modeling.svg/540px-Process_and_data_modeling.svg.png",
        bgColor: "#40163c",
        createdBy: "ADMIN_SEED",
    },
    // {
    //     name: "Engineering",
    //     description:
    //         "Engineering is the use of scientific principles to design and build machines, structures, and other items, including bridges, tunnels, roads, vehicles, and buildings.",
    //     image: "https://i.imgur.com/hqbFuLh.jpeg",
    //     bgColor: "#163C40",
    //     createdBy: "ADMIN_SEED",
    // },
    {
        name: "Information Technology",
        description:
            "Information technology (IT) is the use of computers to create, process, store, retrieve and exchange all kinds of electronic data[1] and information. IT is typically used within the context of business operations as opposed to personal or entertainment technologies.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Z3_Deutsches_Museum.JPG",
        bgColor: "#fbb640",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Mathematics",
        description:
            "Mathematics includes the study of such topics as numbers (arithmetic and number theory), formulas and related structures (algebra), shapes and spaces in which they are contained (geometry), and quantities and their changes (calculus and analysis).",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Euclid.jpg",
        bgColor: "#f2353b",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Statistics",
        description:
            "Statistics is the discipline that concerns the collection, organization, analysis, interpretation, and presentation of data.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Standard_Normal_Distribution.png/435px-Standard_Normal_Distribution.png",
        bgColor: "#7caaa7",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Nursing",
        description:
            "Nursing is a profession within the health care sector focused on the care of individuals, families, and communities so they may attain, maintain, or recover optimal health and quality of life.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/RedCrossNursen.jpg/330px-RedCrossNursen.jpg",
        bgColor: "#f2353b",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Finance",
        description:
            "Finance is a term for matters regarding the management, creation, and study of money and investments.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Philippine-stock-market-board.jpg",
        bgColor: "#fbded5",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Accounting",
        description:
            "Accounting or accountancy is the measurement, processing, and communication of financial and non financial information about economic entities such as businesses and corporations.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Pacioli.jpg",
        bgColor: "#40163c",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Economics",
        description:
            "Economics is the social science that studies the production, distribution, and consumption of goods and services.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Supply-demand-right-shift-demand.svg/330px-Supply-demand-right-shift-demand.svg.png",
        bgColor: "#c7b8bd",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Physics",
        description:
            "Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Einstein1921_by_F_Schmutzer_2.jpg/1024px-Einstein1921_by_F_Schmutzer_2.jpg",
        bgColor: "#c7b8bd",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Business",
        description:
            "Business is the activity of making one's living or making money by producing or buying and selling products (such as goods and services).",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Bolsa_Mexicana_de_Valores.png/1024px-Bolsa_Mexicana_de_Valores.png",
        bgColor: "#005b96",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Graphic Design",
        description:
            "Graphic design is the profession and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/National_Park_Service_sample_pictographs.svg/330px-National_Park_Service_sample_pictographs.svg.png",
        bgColor: "#9fb3c7",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Marketing",
        description:
            "Marketing is the process of intentionally stimulating demand for and purchases of goods and services.",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Product_life_cycle.png",
        bgColor: "#0ff1ce",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "English",
        description:
            "English studies (usually called simply English) is an academic discipline taught in primary, secondary, and post-secondary education in English-speaking countries.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/702px-Shakespeare.jpg",
        bgColor: "#6f6282",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Political Science",
        description:
            "Political science is the scientific study of politics. It is a social science dealing with systems of governance and power, and the analysis of political activities, political thought, political behavior, and associated constitutions and laws.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/2011_Philippine_State_of_the_Nation_Address.jpg/1920px-2011_Philippine_State_of_the_Nation_Address.jpg",
        bgColor: "#6a6a77",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "History",
        description: "History is the study of the past.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Herodotus_Massimo_Inv124478.jpg/1024px-Herodotus_Massimo_Inv124478.jpg",
        bgColor: "#d8880b",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Philosophy",
        description:
            "Philosophy is the study of general and fundamental questions, such as those about existence, reason, knowledge, values, mind, and language.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1920px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
        bgColor: "#003b4a",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Spanish",
        description:
            "Spanish is a Romance language that evolved from colloquial spoken Latin in the Iberian Peninsula of Europe.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Juan_de_Z%C3%BA%C3%B1iga_dibujo_con_orla.jpg/800px-Juan_de_Z%C3%BA%C3%B1iga_dibujo_con_orla.jpg",
        bgColor: "#6f6282",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Communications",
        description:
            "Communication studies or communication science is an academic discipline that deals with processes of human communication and behavior, patterns of communication in interpersonal relationships, social interactions and communication in different cultures.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Pioneer_plaque.svg/1920px-Pioneer_plaque.svg.png",
        bgColor: "#e4eeed",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Chemistry",
        description:
            "Chemistry is the scientific study of the properties and behavior of matter.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Henrika_%C5%A0antel_-_Kemi%C4%8Darka.jpg",
        bgColor: "#f2353b",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Biology",
        description: "Biology is the scientific study of life.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Charles_Darwin_aged_51.jpg",
        bgColor: "#163c40",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Criminal Justice",
        description:
            "Criminal justice is the delivery of justice to those who have committed crimes.",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Old_Bailey_Microcosm_edited.jpg",
        bgColor: "#492d0c",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Sociology",
        description:
            "Sociology is a social science that focuses on society, human social behaviour, patterns of social relationships, social interaction, and aspects of culture associated with everyday life.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Ferdinand_Toennies_Bueste_Husum-Ausschnitt.jpg",
        bgColor: "#ffa386",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Electrical Engineering",
        description:
            "Electrical engineering is an engineering discipline concerned with the study, design and application of equipment, devices and systems which use electricity, electronics, and electromagnetism.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Umspannwerk-Pulverdingen_380kV-Trennschalter.jpg/1920px-Umspannwerk-Pulverdingen_380kV-Trennschalter.jpg",
        bgColor: "#d2dbcf",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Mechanical Engineering",
        description:
            "Mechanical engineering is an engineering branch that combines engineering physics and mathematics principles with materials science to design, analyze, manufacture, and maintain mechanical systems.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Volkswagen_W16.jpg/1920px-Volkswagen_W16.jpg",
        bgColor: "#d8880b",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Chemical Engineering",
        description:
            "Chemical engineering is a certain type of engineering which deals with the study of operation and design of chemical plants as well as methods of improving production.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Colonne_distillazione.jpg/1024px-Colonne_distillazione.jpg",
        bgColor: "#d2dbcf",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Industrial Engineering",
        description:
            "Industrial engineering is an engineering profession that is concerned with the optimization of complex processes, systems, or organizations by developing, improving and implementing integrated systems of people, money, knowledge, information and equipment.",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Industrial_Engineer_Working.jpg",
        bgColor: "#008080",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Civil Engineering",
        description:
            "Civil engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewage systems, pipelines, structural components of buildings, and railways.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Viaduct_in_Puxi%2C_Shanghai.jpg",
        bgColor: "#8f946a",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Computer Engineering",
        description:
            "Computer engineering is a branch of engineering that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Dell_Dimension_C521_Motherboard.jpg/1024px-Dell_Dimension_C521_Motherboard.jpg",
        bgColor: "#163c40",
        createdBy: "ADMIN_SEED",
    },
    {
        name: "Biological Engineering",
        description:
            "Biological engineering or bioengineering is the application of principles of biology and the tools of engineering to create usable, tangible, economically-viable products.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Molecular_Machines_of_Life.jpg",
        bgColor: "#f78589",
        createdBy: "ADMIN_SEED",
    },
];

//first delete user data in database and then populate with seed data
User.deleteMany({})
    .then(() => User.insertMany(userSeed))
    .then((data) => {
        console.log(
            data.length +
                " " +
                Object.keys({ userSeed })[0] +
                " records inserted."
        );
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

Subject.deleteMany({})
    .then(() => Subject.insertMany(subjectSeed))
    .then((data) => {
        console.log(
            data.length +
                " " +
                Object.keys({ subjectSeed })[0] +
                " records inserted."
        );
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
