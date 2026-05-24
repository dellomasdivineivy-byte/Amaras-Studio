\documentclass[12pt, letterpaper]{article}

% ==========================================
% 1. PAPER SIZE & MARGINS
% ==========================================
\usepackage[letterpaper, left=1.5in, top=1in, right=1in, bottom=1in]{geometry}

% ==========================================
% 2. SPACING & ALIGNMENT
% ==========================================
\usepackage{setspace}
\singlespacing 

% ==========================================
% 3. LANDSCAPE PAGES (For Diagrams)
% ==========================================
\usepackage{pdflscape}
\usepackage{tikz}
\usetikzlibrary{shapes.geometric, arrows, positioning}

% ==========================================
% 4. FONTS (Using Uploaded Files)
% ==========================================
\usepackage{fontspec}

% Tell LaTeX to look in the current folder (Path = ./) 
% and specify the EXACT filename of the Century font you uploaded.
\setmainfont{Century.ttf}[
    Path = ./,
    % If you uploaded separate files for bold and italics, you can add them like this:
    % BoldFont = CenturyBold.ttf,
    % ItalicFont = CenturyItalic.ttf
]

% Specify the EXACT filename of the Century Schoolbook font you uploaded.
\newfontfamily\titlefont{CenturySchoolbook.ttf}[
    Path = ./
]

\usepackage{titlesec}
% Format Sections to match the outline (Section I - Introduction)
\titleformat{\section}{\titlefont\fontsize{12}{14.4}\selectfont\bfseries}{ \Roman{section} - }{0em}{}
\titleformat{\subsection}{\titlefont\fontsize{12}{14.4}\selectfont\bfseries}{\thesubsection}{1em}{}
\titleformat{\subsubsection}{\titlefont\fontsize{12}{14.4}\selectfont\bfseries}{\thesubsubsection}{1em}{}

% ==========================================
% 5. CUSTOM TITLE FORMAT (Inverted Triangle)
% ==========================================
\newcommand{\invertedtitle}[1]{
    \begin{center}
        \titlefont\fontsize{17}{20.4}\selectfont\bfseries
        #1
    \end{center}
}

% ==========================================
% 6. Check and x marks.
% ==========================================
\usepackage{amssymb} % Required for the \checkmark symbol
\usepackage[numbers]{natbib}
\usepackage{booktabs}
\usepackage{tabularx}
\usepackage{graphicx}
\usepackage{xcolor}
\usepackage{indentfirst}

\bibliographystyle{unsrt}
\renewcommand{\figurename}{Fig.}
\usepackage{xcolor}
\usepackage{hyperref}

\hypersetup{
    colorlinks=true,
    allcolors=blue
}

\begin{document}

% ------------------------------------------
% MANUSCRIPT HEADER
% ------------------------------------------

% 1. The Title 
% (Uses the \invertedtitle command. Instruct students to use \\ to break 
% lines so that each line is shorter than the one above it.)
\invertedtitle{
    WEB-BASED ONLINE BOOKING AND
    PICTORIAL MANAGEMENT SYSTEM FOR
    AMARAS STUDIO WITH AUTOMATED
    SCHEDULING
}

\vspace{1.5em}

\begin{center}
    % 2. Authors (Century, 12pt)
    
    {\fontsize{12}{14.4}\selectfont
    \vspace{0.9em}
    Micah B. Capobres\textsuperscript{1}, Nichole Anne Q. Gracilla\textsuperscript{2}, Divine Ivy G. Dellomas\textsuperscript{3}, Arwin L. Gojo \textsuperscript{4} \par}
    
    \vspace{1em}
    
    % 3. Affiliation (Century, 12pt)
    {\fontsize{12}{14.4}\selectfont
    College of Information and Communications Technology \\
    Sorsogon State University - Bulan Campus \\
    Bulan, Sorsogon \par}
    
    \vspace{1.5em}
    
    % 4. Emails (Century, 12pt)
    {\fontsize{12}{14.4}\selectfont
    \vspace{24em}
    E-mails:
    \href{mailto:micahcapobres8@gmail.com}{micahcapobres8@gmail.com};
\href{mailto:nicholeannegracilla@gmail.com}{nicholeannegracilla@gmail.com};
\href{mailto:dellomasdivineivy@gmail.com}{dellomasdivineivy@gmail.com};
\href{mailto:arwin4431@gmail.com}{arwin4431@gmail.com}
\par}
\end{center}

\vspace{2.5em} % Adds space between the header and the executive summary

% ------------------------------------------
% EXECUTIVE SUMMARY
% ------------------------------------------



\newpage % Pushes Section I to the next page

% ------------------------------------------
% SECTION I
% ------------------------------------------
\section{Introduction}
This chapter presents the background of the project, including its purpose, description, objectives, scope, and limitations. It aims to explain the current situation of Amaras Studio and the need for developing a Web-Based Online Booking and Pictorial Management System with Automated Scheduling to improve its booking and management processes.
\subsection{Project Context}
Advanced development of information technology has changed the way of service provision by enterprises and communication with customers. Indeed, many service companies now use Web-based systems for better management of their organization. One of the best-known and widely used applications is the online reservation system, with which customers can make appointments via the internet any time and from any location. \cite{bozan2023}Online booking provides businesses with a way to automate many manual tasks, ensuring better accuracy in scheduling, while also making it easier for customers to book service with them. Research in appointment scheduling systems suggests that digital booking systems enhance the service quality and enable better appointment management due to the fact that customers are able to choose appointment slots directly within the system. In service industries such as photography, it is necessary to handle bookings, schedules, and customer information to run day-to-day operations. Still what they provide is, in this day and age, manual bookings, getting in touch with them via phone or catching their attention on social media and at times by the very analogue method of writing down your booking details on pieces of paper. \cite{mohathir2025} 

\vspace{1.5em}

In the Philippines, the rising utilization of online booking systems in service industries reflects the increasing demand for productive, convenient, and technology-based customer service management. Gomez et al. (2020) proposed MUSICHUB, a rehearsal studio locator and reservation system based on web and Android in Davao City, which led to a substantial improvement in scheduling efficiency, convenience, and customer satisfaction via digital reservation services. The study aims that automated reservation systems provide benefits of reducing manual transaction, minimizes scheduling conflicts, and facilitating the administration of appointments for more organized and efficient. Also, the growing dependence on online reservation provides the positive impact of a web-based system can have on communication, operational efficiency, and customer satisfaction in the service industry. To be able to provide the clients and the studio a convenient, dependable, well-organized, and an efficient way of booking, scheduling and managing the pictorial studio. \cite{gomez2020}. 

\vspace{1.5em}

These conventional procedures may create a load of operational issues such as duplicated bookings, schedule clashes, information loss, and poor communication with clients. Studies on web based photography studio systems show that an online information system enhances the overall management of the studio, its accessibility to services and communication with the clients. \cite{adhi2023}Because photography studios deal with multiple clients, events, and shoots simultaneously, they require a good schedule layout. Without automation, staff at the studio may struggle to manage their appointments and client details and schedules. An online photography service booking system can simplify these daily operations by bringing all these activities at one place such as clients can see services, schedule appointments, and get confirmation for their bookings. These systems further enable the companies to advertise their services and facilitate door step access to the clients. 

\vspace{1.5em}

Amaras Studio provides many types of photo shoots such as portraits, events, and more. With so many customers, the chore of keeping track of bookings and schedules manually could be too much. Issues like double bookings, miscommunication with clients and booking management can influence the studio operation and the quality of service delivered to customers. Therefore, the proposal of the advocates took shape and development resulting in the Web-Based Online Booking and Pictorial Management System for Amara Studio with Automated Scheduling. Clients are now able to book their photography sessions online, find out about available schedules, and receive booking confirmation. The scheduling automation feature eliminates double booking and allows proper time management for the studio. Furthermore, it enables you to maintain, in one place, all the client data and booking information along with your pictorial planning. Collectively, the suggested system serves to benefit both the operational workflow of Amara Studio and adopted clients manages a more convenient organized way of booking. By combining web-based booking and automated scheduling, the platform allows for more efficient service delivery, higher productivity, and superior customer satisfaction.

\subsection{Purpose and Description}
The proposed system is designed to develop a Web Based Online Booking and Pictorial Management System with Automated Scheduling for Amaras Studio that would bring about operational improvements, better service delivery and an overall modernization of the studio’s booking and management system. The system is intended to substitute the existing manual techniques of maintaining bookings, schedules, and client records in paper based manner with a consolidated and automated digital system.
Particularly, the system makes it possible for customers to get photography services online at their convenience by checking the schedules, choosing a date and time, and booking services in real time. So it’s more accessible and convenient for the users instead of communicating manually on social media or physically asking. Whereas, the system offers the studio management an overall administrative solution to effectively manage client details, track bookings, schedule pictorials and keep information up to date. An important component of the proposed system is scheduling automation, which perform availability schedule detection and conflict avoidance (double booking).

\vspace{1.5em}

In addition, the system introduces the features of pictorial management, which will enable the studio to save, sort and manage the photographic data of clients in a tabular form securely. As a result of this unified management both clients and a dministrators now have better communication, easier access to data, and more orderly work flows. Presented approach is a trustworthy, easy-to-use and effective application that improves both the customer experience and the in-house facilities. With the integration of online booking, automated scheduling, and pictorial management, into one-system, it ensures more productivity, less mistakes and satisfied clients for Amaras Studio.


\subsection{Objectives}
The general objectives of the proposed capstone project  is to develop and provide for Amara Studio a Web-Based Online Booking and Pictorial Management System with Automated Scheduling. Specifically, the project aims: 

\begin{enumerate}
    \item To design and develop a system that enables customers to book appointments for client and pictorial services at Amara Studio This may also include administration functionality such as:
    \begin{enumerate}
        \renewcommand{\labelenumii}{\theenumi.\arabic{enumii}}
        \item Client Information Management
        \item Online Booking and Notification Management
        \item Pictorial Record Management
        
\titleformat{\subsubsection}
  {\normalfont\normalsize} % removes bold
  {\thesubsubsection}{0.4em}{}
  \subsubsection{Wedding}
  \subsubsection{Birthday}
  \subsubsection{Graduation}
  \subsubsection{Pageant}

       
 

        \item Appointment and Schedule Management
        \item Booking History and Reporting Management
    \end{enumerate}

    \item To build an automated scheduling system that will allow the studio owners to effectively track and manage their appointment hustle efficiently in real-time. This includes:
    \begin{enumerate}
        \renewcommand{\labelenumii}{\theenumi.\arabic{enumii}}
        \item Real-time booking of available schedules and confirmation and automated notification (email/SMS alert)
        
        
    \end{enumerate}

    \item The proposed system should be designed with an easy to use UI which includes the security features to facilitate everyday functionalities by administrators and to guarantee the protection and the integrity of the system. This includes:

    \begin{enumerate}
        \renewcommand{\labelenumii}{\theenumi.\arabic{enumii}}
        \item Login authentication system
        \item Safe management of booking and client files

    \end{enumerate}    

    \item To assess the system’s performance based on ISO/IEC 25010 software quality standards. This evaluation is for the following characteristics:
    
    \begin{enumerate}
        \renewcommand{\labelenumii}{\theenumi.\arabic{enumii}}
        \item Functionality of Suitability
        \item Reliability 
        \item Usability 
    \end{enumerate}
\end{enumerate}


\subsection{Scope and Limitations}
This proposed system mainly focused on “Web-Based Online Booking and Pictorial Management System for Amara Studio with Automated Scheduling” is a web based application that focused on the designing and developing a system which is beneficial for the Amara Studio that will reduce the time and effort of managing their booking and pictorial management. The new system will be an easy to use and efficient system for the customers to book photography session online and to allow the studio management to manage the appointments, client records, and pictorial schedule. Clients’ information, online booking, pictorial record, appointment schedule, and booking history. The studio administrator can log in to an administrative panel to respond to reservations, access client details, modify pictorial records, and review reports regarding studio activities. Moreover, the solution will incorporate some extra functionalities for the studio management and clients. This study
is conducted at Sitio Pawa, Purok 7, Lajong, Bulan, Sorsogon where Amara Studio is operating. It aims to target the residents of Bulan municipality and also those in the periphery of Bulan particularly Sorsogon City, and to make the booking for photography services through an online portal. But the system has its limits. The proposed system will be web based application only, therefore the application will not be developed for a certain specific platform like windows or android.

\vspace{1.5em}

The proposed system also has the following limitations. The system is going to be a web-based system only and you will need an internet connection to be able to use it. It is tailored for Amaras Studio and it serves for reservations, customers, schedules, pictorial data and payments. The system allows payment with various methods including online payment through certain third-party payment gateways and cash on hand (pay on site). However, this work does not address more complex financial management tasks including refunds, partial payments, automated billing, or handling transactions in multiple currencies. In terms of the system reliability, real-time schedule validation and conflict detection as well as automated booking confirmation will be used to guarantee that no double booking occurs. Notifications will be sent as in-system notifications and e-mail notifications for booking and payment status. For cash on service transactions, bookings can be subject to admin confirmation as a measure to reduce no-shows and to keep the schedule running smoothly. The system does, however, rely on the administrator or studio personnel to update and maintain data on an ongoing basis for accuracy and the evaluation will be restricted to a subset of ISO/IEC 25010 characteristics i.e. functional suitability, reliability and usability.


% ------------------------------------------
% SECTION II
% ------------------------------------------
\newpage % Pushes Section I to the next page
\section{Review of Related Systems}

This section provides a comparative analysis of existing related software and platforms. By evaluating the features, strengths, and weaknesses of current systems, this chapter identifies specific technological gaps in the market and justifies the necessity of the proposed solution.

\subsection{Introduction to Related Systems}

It is essential to review related systems so as to get an idea on how the current technologies and applications make online booking, scheduling and custo-mer details. Through the study of such systems, the researchers can determine the advantages and disadvantages of the existing systems and the potential of the new system. This part describes some of the related work in the areas of online booking, appointment scheduling, and pictorial management. The systems are analyzed with respect to the objectives and main features, technologies applied, advantages and disadvantages. These related systems will serve as guide in designing and developing the Web-Based Online Booking and Pictorial Management System for Amaras Studio with Automated Scheduling.
    


\subsection{Overview of Each Related System}

The Photography Service Booking System (2023) by Hans Putra Adhi Purno-mo and Tinuk Agustin was published from Formosa Journal of Computer and Information Science was designed to bring the professional photography service hiring process to the next level. The architecture is designed based on a modern Javascript stack (Node.js, MongoDB) to support real-time streaming model. Functionality is divided between three main modules Admin, User and Photographer with a strong catered session management, backed by Redis to keep performance at peak load. Although the platform is exceptionally good at the booking and payment stages, there is no formal process for managing pictorials post production, or storing client assets long term.\cite{adhi2023}


   \vspace{1.5em}

The Website-Based Photo Studio Information System for Customer Reservation Management (2025) by Annisa Auliya Zenita Rachman, Fatimah Az-Zahra, Hana Hanifah, and Dwi Vernanda. This study deals with the inefficiency in processing of manual reservations at studio which includes physical queuing and double booking. Developed following the Software Development Life Cycle (SDLC) with Waterfall approach, the system offers a 24/7 web portal for customer enquiries and bookings. The end goal is to improve operational accuracy using automated transaction reporting and data aggregation. While the platform drastically cuts down on administrative effort, its functionality is limited to the life cycle of a reservation and does not include integration of digital galleries for the delivery of final pictorial products.\cite{azzahra2025}


   \vspace{1.5em}

The Web-Based Photography Service Booking System to Improve Micro-Business Service (2025) by Putri Taqwa Prasetyaningrum, Rahmatika Suryani, and Marjhona Vicky. This software is designed for small laboratories with a purpose to reform of the working procedure of micro photography studio. Published in the Journal of Sustainable Communities and Development, this system aims to overcome poor manual booking methods such as losing customers’ data and getting small market by using platform-based order management system. The system provides a user-friendly booking engine for clients, an automated order management system for the owners, and an accurate business report. Designed using simple and affordable tools such as Wix and defined in Unified Modeling Language (UML), the main advantage of the platform resides in the fact that it is applicable for micro-entrepreneurs who do not possess high digital skills, granting them a basic tool to professionalize their brand image and improving booking accuracy. Nevertheless, a major handicap to such an approach is that it relies on third-party website builders, which can be inflexibly customised with proprietary data control as in custom-coded frameworks, while potentially limiting long-term scalability for high-volume studios.\cite{hikmah2025}

   \vspace{1.5em}

The Photography Studio Information Management System, an online system developed by Nordini Emily Mohathir and Nureize Arbaiy (2025) and published in the journal of Applied Information Technology and Computer Science, is intended to transform the photography business workings from within through a centralized administrative system. This system is exceptional at bringing together studio management functions like client management, financial reporting, and multi-site coordination, all in one place, helping studios to achieve data integrity and avoid the kinds of redundancy that plague manual record-keeping. It provides powerful, professional customer and order management, fully-automated financial tracking, and advanced report generation for managerial control. While details for the specific code base are usually proprietary to such institutional projects, systems of this type generally use strong database solutions such as MySQL, or MongoDB, with web-based technologies, such as php, or node.js, to process relational data of great complexity. The system’s greatest ability is providing the “single source of truth” for studio owners reducing administrative mistakes and enhancing business scalability. However, a significant drawback is its concentration on back-end operations; an integrated client-facing pictorial solution for photo proofing and delivery is not yet available, meaning there's a hybrid workflow where the studios continue to use an outside third-party application to deliver final creative products to their customers. \cite{mohathir2025}
   

   \vspace{1.5em}

Photo Studio Booking System developed by Sri Haryati, and Chanifah Indah Ratnasari (2021) Journal article The main function of this system is to prevent traditional, inaccurate way such as making physical visit, picking up the phone, and waiting for slow WhatsApp reply, to a digital platform that makes access for customer easier and for administration more efficient. The system also has a web booking facility through which customers can choose photo packages, view availability schedules and an admin module to capture orders and generate transaction reports, recorded previously in paper and Excel. Developed using prototyping approach and coded in PHP, the system's robustness is demonstrated by a high usability rate of 94.29 and is excellent in terms of both staff and client rotation. However, one important downside discovered for its development is that it would be a web-based prototype at first, which means the admin would still need to manually recapitulate some reports; it is a solution to the immediate "slowness" problem THE SIMOL will be able to automate dynamic resource management (equipment tracking) to the level of more complex enterprise studio software but not immediately. \cite{ratnasari2021}


   \vspace{1.5em}

The Wedding Photography Business System Based on Web in Cloud Computing has been developed by Yong Wang (2022) and published by SCB through Springer Nature, is wedding photography service marketing and operation efficiency management wedding photography service operation focused enterprise application. The system is designed to replace in-person traditional fragmented business processes with a B/S (Browser/Ser-ver) mode that combines online branding with back-end management and is intended to connect with and serve a digital-native customer base. Features are a simple customer-facing gallery and booking module, an engaging booking and online consultation module, a full CRM database, and automated financial tracking. Developed on Java EE platform and employing Spring and Hibernate frameworks with MySQL as database, the system’s core competence lies in its scalability and with the adoption of MVC (Model-View-Controller), design pattern that clearly separates the concerns and allows easy maintenance as the studio is going business-wise. But one major limitation reported in this work is the absence of more profound integration with social media APIs for instant viral marketing and minimal support for processing large scale high resolution RAW-format files directly on browser, which makes local storage essential for top-notch post production processing.\cite{alfian2022}


   \vspace{1.5em}

The Dizeto Online Marketplace created by Tedjo Darmanto (2024) from Universitas Islam Nusantara and categorized under Engineering and  Technology software resource is a web-based platform application to upgrade Indonesia creative industry titled Designing a Photography and Videography Booking Website (Dizeto) Using Agile Software Development Method with Next.js Framework The Dizeto is created to bring new life to Indonesia creative industry through online platform. The system is designed to address the frustrations customers face when booking photography services with a streamlined, efficient and transparent platform for service users and providers. Other features included a safe user authentication system, interactive portfolio section, predefined pricing packs and a real-time booking system with specific date/time selection. Rebuilt with a contemporary and scalable technology stack For the frontend, we used Next.js and React.js for backend logic, we used Golang  while  our data is stored in MySQL - the core strength of the system lies in its development based on Agile, which it can provide a fast, responsive user experience let DownTheBlock’ users complete transactions in just minutes. A significant downside, on the other hand, identified in the research is the absence of an advanced search methodology and a ranking system and the very weak integration with social media, currently the only form of viral marketing possible and for a more profound filtering of vendors for users. \cite{Zhang2022}


   \vspace{1.5em}

Photography Studio Appointment Web Application Folkway Photography’s manual operation was replaced with a digital system for Folkway Photography by the application developers Ming Wee Loi and Noryusliza Abdullah (2023) from Universiti Tun Hussein Onn Malaysia in the article of Applied Information Technology and Computer Science. This system enables the studio to update their operations and workflows by removing unnecessary repetition in recording data, mismatch in scheduling, and danger of losing information in paper-based system through the web-based application. Notable features include a client portal (for booking, online payments, and feedback), and an admin dashboard (for controlling service listings, user accounts, and running business reports). Developed using the Waterfall approach and with PHP as the main programming language in conjunction with HTML5 and CSS, the system’s principal asset is the simplicity of its interface which, as a result, leads to a considerable decrease in the administrative burden for personnel and clients alike. Nevertheless, a significant shortcoming is that although it does address the logistics, and revenue side of the appointment lifecycle, the study revolves primarily around rudimentary scheduling and does not address advanced technical integrations, such as high-resolution pictorial asset management, which are becoming industry standards for high-volume contemporary studios. \cite{wang2022}


   \vspace{1.5em}

The Optimization of Photography Services Ordering System, (2022) by Pulla Pandika Widodo, Fitri Pratiwi, and Al Malikul Ikhwanda Putra, is an application based on web that is developed to make a photography business go from using manual handwritten record to automated record. The system is designed to prevent mispricing and errors in data retrieval which is common in large volume bookings for weddings and portraits. Among the features are a full service management admin panel, a customer portal to place orders over the internet and a reporting module that can deliver the summary of transactions by day, month or year. Developed using the Waterfall approach, the solution supports a rigid data flow ensuring that every booking is traceable from inquiry to payment completion. Its greatest strength is its ability to enable local studios to operate efficiently – but as with many products in this category, its main weakness is that it does not include a digital gallery for delivering images following post-production. \cite{darmanto2024}

  \vspace{1.5em}

The Online Photographer Booking System is a web-based application which has been published in a International Journal of Hussain with title "Online Photographer Booking System" in Shodhshauryam International Scientific Refereed Research Journal written by Momin M. Saud, Shaikh Adnan and Shaikh Aaqib from Vishwabharati Academy's College of Engineering. The system designed should aims at bringing a client's and a professional photographer’s needs closer in a single platform, and eliminating the clutter of finding and hiring talent for various occasions such as wedding, group and solo portrait etc. Features: Role Based Modules (User, Photographer and Admin), Showcase the Portfolio, Online Payment integration and Innovative Video Call Feature for Baseline meeting with Client-Photographer. The system uses a modern full-stack approach with HTML, CSS, and JavaScript on the frontend;   Node.js on the backend; MongoDB for data storage; and Redis for session management and caching for improved performance. It can be said that the strong points of the system are the high responsive UI, and the optimization of database queries through Redis, which leads to a good page loading speed and system scalability. Yet, the system’s drawback is that it exists mainly in a local test setting and although strong, it still needs to withstand real life conditions, and connecting clients with photographers and managing bookings.\cite{loi2023}
  
  \vspace{1.5em}

Web-Based Booking System was created by Raven Jeremy Daza, John Eric Tambalque, Charles Austin Ho, and Khail Cedric Moreno of Arellano University Pasig Campus (Philippines). It is an automation system designed to facilitate the process of reserving community sports facilities and eliminate the need to use manual methods in booking by providing an online system where the users can view the schedules and book the facilities with ease. The key functionalities of the system are online reservation, real-time customizing and viewing schedules, logging in to user profile, storing booking records, data visualization dashboards, and a schedule algorithm that can avoid conflicts of reservations. The system was designed with PHP as server-side scripting language, MySQL as the database, and the System Development Life Cycle (SDLC) methodology was applied in developing the system in a manner of sequential and structured phases. The system was very effective in enhancing accessibility and convenience by enabling users to book venues over the internet, and allowing administrators to have a more well-organized booking information and visually presented reports to assist them in managing the information more efficiently. Nevertheless, the system still has limitations as it is more geared towards the management of sports facility bookings and it is possible that more features could be added such as pictorial management, which are important for online booking.\cite{anyanwu2026}
  
  \vspace{1.5em}

The Online Reservation Management System to Increase Transaction Efficiency at MOMENKITA Photo Studio by Firmansyah, Muhammad Rais Rahmat Razak, and Wahyudi Sofyan from the Universitas Muha-mmadiyah Sidenreng Rappang. The system aims to make the transaction and management work easier in photo studio by substituting the manual booking and recording process with a web application. For this purpose, important system features, such as online reservation for photo session, customer record management, schedule management, monitoring transactions, and report generation for studio activities and financial transactions, are provided for the administrator. Using web-based technology, the development process of the system follows the Waterfall model that comprises a number of phases such as analysis, design, coding, testing and support. The system’s forte is that it streamlines the managing of booking, organizes data better, and minimizes schedule conflict and transaction error. Despite the advantages of the system, it has also become the shortcoming since the system concentrated on reservation and transaction with out any value-added offering such as integrated digital gallery for advanced pictorial management to deliver the edited photos to client.\cite{pratama2024}

  
  \vspace{1.5em}

The Web-Based Studio Booking and Payment System for selected studios in Metro Manila was created by a research team from the Philippine Christian University (d.j.c. Garcia, et al.) to revolutionize the reservation system for high-demand photography spaces in the National Capital Region. Instead of having to inquire about availability by phone, system users can book studio time directly on one real-time centralized platform, which is the service's way of bypassing the inefficiencies of manually handled, inquiry-based booking. Features such as automated reservation calendars, integration with world-class payment gateways (local payment methods such as GCash or Maya can also be integrated), and automated SMS/email notifications for booking confirmations. Built on the PHP Laravel framework with a MySQL database and following the Agile methodology, the applications key differentiators are local payment integration and reducing "no-shows" by requiring deposit payments. Still, its system is geo and structurally limited; it’s is designed only for the Metro Manila market with no advanced “Pictorial Management” features, and is really just about the logistics of renting studio space and the financial exchange, not the delivery of post-shoot files.\cite{Olatunji2023}
  
  \vspace{1.5em}

The Photo and video event's online booking with SMS notifications is a system gifted by Alvin Teniola, Melvin Naldoza, and Elpidio Cagna-an Jr. It is a web-based applicagtion that aims to replace traditional booking method for photo and video services. System The system is designed to eliminate the traditional way of booking in paper into a full digital app, that makes easier for the clients to book dates for events and for the studios to organize their agendas. Highlights of the app are an online events booking, SMS notifications in realtime to confirm appointments instantly, a central client database and an admin dashboard to keep an eye on future event bookings. While such technical documentation is usually localized, these types of systems are generally developed using PHP and MySQL on the backend to manage data, and HTML and JavaScript on the frontend for the designing of user interfaces. The system is best-known for its ease of use, as it allows bookings to be done at any hour of the day, and for the SMS notification delivery system that enables users to get instant confirmation of bookings and reminders of their appointments. A usual drawback of this particular version is that it tends to cater for the logistics side of booking and misses out on rolling in extra features such as online payment processing or a “Pictorial Management” section for delivering jobs in digital photograph to clients.\cite{gatchalian2023}

  
  \vspace{1.5em}

Online Event Reservation for Lipa City Cultural with SMS Notification was innovated by M. A. Marasigan, J. M. Macahiig, and L.A. Ebora of Kolehiyo ng Lungsod ng Lipa to upgrade the handling of reservation for local culture events and its venue. Its core objective is to replace paper-based booking with a more organized, web-based system and to facilitate communication between event organizers and city officials. Features: the module allows to book dates online, and to manage the events with an administration area, and also with an integrated sms module that keep users updated on the status of their bookings. Although the technical details follow the standard web development practices, a booking system for website is generally developed with PHP, MySQL, and a third party SMS Gateway API e.g. iTexMo, FrontlineSMS etc. What makes this unique is the transparency it brings to the booking system, and the use of real-time mobile alerts, so customers can stay informed without having to go online for updates. Yet, it has a marked limitation in the fact that it is centered around facility and event management rather than a wider pictorial management or content management system which challenges to be developed, and its digital media management which are important to the services of online photography.\cite{hernandez2023}

\vspace{1.5em}

Booking and Reservation System: A Single Application Using Location-Based Services for Eco-tourism Networks Reginald Ryan U. GOSELA, rizah e. encarnacion in Surigao del Norte State University, Philippines 2024. By combining location-based service and reservation center functions, the system is for Nasipit Agusan del Norte,it was to develop a one-stop web booking and reservation system for tourism services. Its goals are to enhance the accessibility for tourists, increase booking efficiency and improve convenience for customer via real-time tracking, online reservation, establishment directories, and one-stop integrated booking services. Utilising web technology, location-based services (LBS), database management systems (DBMS) and interactive online features, Tourism@ serves tourism operation and reservation management. A key strength forem is that it can streamline the booking process and make tourism information more accessible and facilitate easy transaction management through the one-stop platform. Nonetheless, the system is basically on the tourism reservation services and there are no pictorial management, automated scheduling conflicts identification, and digital photo processing features necessary to run a photo studio business.\cite{gosela2024}

\vspace{1.5em}

Nature Spring Resort Web-Based Reservation and Management System was made by Ramento, Dancel, Taberlo and Anquillano in the year 2024 from Cagayan State University – Gonzaga Campus, Philippines. The system was intended to replace the resort’s manual system of managing reservations and records, which consisted of a book and a spreadsheet. Its primary objective is to enable users to make bookings online at their convenience and receive up-to-date availability information and swift reservation processing. It offers online reservation, admin dashboard, customer management, booking monitoring, payment upload via gcash, inquiry management, reports generation and much more with room and cottage availability in real-time. The application of system was based on web technology, database technology and agile development method to achieve high running efficiency of the resort. “Advantages It’s good at eliminating manual mistakes in booking, streamlining operations, and enhancing customer convenience by automating the management of reservations. Still, the system is oriented solely to the services of a resort booking system, and it lacks pictorial management and automated scheduling capabilities tailored to photography studio business.\cite{ramento2024}


\subsection{Comparison of Related Systems}

\begin{table}[h!]
    \centering
    \caption{Feature Comparison Matrix of Related Systems [1--15] vs. Proposed System}
    \label{tab:system_comparison}
    \vspace{1em}
    \renewcommand{\arraystretch}{1.5} 
    \setlength{\tabcolsep}{2.5pt}      
    \small                          
    
    \begin{tabularx}{\linewidth}{X p{18pt} p{18pt} p{18pt} p{18pt} p{18pt} p{18pt} p{18pt} p{18pt} p{18pt} p{18pt} p{18pt} p{18pt} p{18pt} p{18pt} p{18pt} | p{45pt}}
        \toprule
        \textbf{Features / Criteria} & \textbf{[1]} & \textbf{[2]} & \textbf{[3]} & \textbf{[4]} & \textbf{[5]} & \textbf{[6]} & \textbf{[7]} & \textbf{[8]} & \textbf{[9]} & \textbf{[10]} & \textbf{[11]} & \textbf{[12]} & \textbf{[13]} & \textbf{[14]} & \textbf{[15]} & \textbf{Proposed} \\
        \midrule
        Online Booking & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark & $\times$ & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark & \checkmark \\
        \addlinespace
        Studio Management & $\times$ & \checkmark & $\times$ & \checkmark & $\times$ & $\times$ & \checkmark & \checkmark & $\times$ & \checkmark & $\times$ & $\times$ & $\times$ & $\times$ & $\times$ & \checkmark \\
        \addlinespace
        Auto-Scheduling & $\times$ & $\times$ & $\times$ & $\times$ & $\times$ & $\times$ & $\times$ & $\times$ & $\times$ & $\times$ & \checkmark & $\times$ & \checkmark & $\times$ & $\times$ & \checkmark \\
        \addlinespace
        Pictorial Management & $\times$ & $\times$ & $\times$ & $\times$ & $\times$ & $\times$ & \checkmark & $\times$ & $\times$ & $\times$ & $\times$ & $\times$ & $\times$ & $\times$ & $\times$ & \checkmark \\
        \bottomrule
    \end{tabularx}
\end{table}

Table \ref{tab:system_comparison} illustrates the feature comparison between the existing related systems and the proposed solution.

\vspace{1.5em}
Table 1 is a tabulated comparison between fifteen (15) existing solutions which are related to the proposal system, the Web-Based Online Booking and Pictorial Management System for Amaras Studio, and the four essential functions that are online booking, studio management, automated scheduling, and pictorial management. The result of the analysis reveals that the feature that has been most implemented is online booking, as the majority of current systems provide online booking, which means digital reservation has become a mandatory function in contemporary web-based applications. However, studio management is only partially supported, with few systems offering full admin rights over clients, services, and operations. In addition, there is a significant absence of automated scheduling among the vast majority of systems reviewed, with only a handful of such systems carrying out conflict detection or intelligent scheduling, thus indicating a severe deficiency in preclusion of double bookings and in maximization of resources. Most importantly, pictorial management is scarcely available, and only handful of systems boasts ability to manage, save, and/or deliver photographic products, which is a critical functionality in end-to-end service solution. On the contrary, the proposed system supports all four core features, indicating a more comprehensive approach. This makes the proposed approach more functionally complete to fill in the gaps left by the previous solutions, by the integration of booking, management, scheduling automation, and pictorial management in a distinctive unified platform.



\subsection{Insights and Gaps}

From the reviewed systems, it is evident that majority of the web based booking systems offer core functionalities such as online booking, calendar management, customer information management, and auto report generation. These systems enhance efficiency by digitizing the existing manual processes and providing access to service from anywhere at any time with the help of the internet. Many systems incorporate traditional software engineering development methodologies e.g. Waterfall or Agile, or some combination thereof, and apply web development languages and technologies including PHP, JavaScript, and MySQL and utilize modern web application frameworks. However, several limitations could be found in all of these reviewed systems, but it was not intending to discuss those cons in detail. While many platforms are dedicated solely to booking and transaction management, they don’t include pictorial management tools (like digital photo galleries, photo proofing and online delivery of edited images). Some platforms don’t have the features for more advanced automatic scheduling for online booking. These deficiencies clearly indicate that there is a potential to build a system incorporating online booking, automated scheduling, and pictorial management on a cloud-based for better enhancement.


\subsection{Conclusion}

 The related system reviews show that although current booking systems are useful for reservation management and fundamental backend operation, they are quite limited with regards of system integration, automatic conflict solving and full pictorial asset management since bookings solutions are mainly provided in separate modules where the booking scheme, schedule management and photo handling is separated and independently managed leading to procedure overlapping, data redundancy and increasing the risk of schedule conflicts and so on; while the Web-Based Online Booking and Pictorial Management System with Automated Scheduling for Amaras Studio proposed in this paper fills the gap through an integrated solution based on cloud computing that seamlessly blends client booking, intelligent scheduling and digital photography management in one application, using real-time availability querying and conflict detection methods to deter double bookings and to foster streamlined coordination between clients and administrators, and through an integrated pictorial management module that permits orderly storage, retrieval and delivery of digital assets without outsourcing to third party software tools, so as to keep up operational efficiencies, to guarantee data consistency, to lessen manual operations, to enhance clients’ experience and to culminate with a solution that is configurable and integrative to enhance studio workflow and provide better service.


\newpage % Pushes Section I to the next page
% ------------------------------------------
% SECTION III
% ------------------------------------------
\section{Technical Background}

This section delves into the technical foundation of the proposed system. It explores the underlying theoretical frameworks, the chosen technology stack, data security protocols, cloud deployment strategies, and the overall technical and financial feasibility of the project.

\subsection{Theoretical Framework and Core Concepts}
A Web-Based Online Booking and Pictorial Management System with Auto-mated Scheduling for Amaras Studio is proposed based on the IPO model, the processing of this system is a disciplined activity consisting of three stages: input, processing, and output; in information systems, the IPO model is used to describe data flow or stream including hardware- or software-based systems of operation \cite{subiyakto2023}. In this regard, client details, booking information (date, time, and service type), pictorial requests, payment details, and more are included in the system inputs. The activities involved are booking requests processing, automated scheduling, availability checking, payment processing, data validation and pictorial management that by applying each of them in turn extracts actionable outputs from input data. Confirmed bookings, updated schedules, client records, digital galleries, notifications, and reports make up the system's outputs.
\vspace{1em}

\usetikzlibrary{positioning}

\tikzset{
    box/.style={
        rectangle,
        draw,
        thick,
        rounded corners,
        minimum height=5cm,
        text centered,
        font=\sffamily,
        inner sep=10pt
    },
    nodeheader/.style={
        rectangle,
        fill=blue!30,
        rounded corners,
        text centered,
        font=\bfseries,
        inner sep=5pt,
        text width=3cm
    }
}



\begin{tikzpicture}[node distance=5cm, every node/.style={align=center}]

% INPUT node with header
\node (input) [box, fill=white!10] {
    \textbf{INPUT}\\
    Client Details\\
    Booking Info\\
    Date \& Time\\
    Service Type\\
    
};


% PROCESS node with header
\node (process) [box, fill=white!10, right of=input] {
    \textbf{PROCESS}\\
    Booking Processing\\
    Automated Scheduling\\
    Availability Checking\\
    Data Validation\\
    Pictorial Management
};


% OUTPUT node with header
\node (output) [box, fill=white!10, right of=process] {
    \textbf{OUTPUT}\\
    Confirmed Bookings\\
    Schedule Summary\\
    Client Notifications\\
    
};


% Arrows
\draw[->, thick] (input) -- (process);
\draw[->, thick] (process) -- (output);

\end{tikzpicture}

\caption{Fig.1 - Input--Process--Output (IPO) Diagram of the Proposed System}
\vspace{1em}

This Figure 1 applies the Input–Process–Output (IPO) model is a widely used conceptual framework in information systems, derived from general systems theory, which explains how inputs are transformed into outputs through a series of processes. This structured framework is designed to make every process and sub- process of the system orderly and hence gives a good system to handle the management of the clients appointment, booking, remaining pictorial record and etc. In addition, the system increases resource utilization and significantly reduces administrative errors by applying automated scheduling techniques to avoid double bookings. Pictorial management Suite is designed in a way that the studio can digitally store, organize and manage client portraits without the need for manual record-keeping. The research suggest that advancement in operation efficiency, data integrity, and decision making in information system can be achieved when applying the IPO model \cite{subiyakto2023}. Hence the proposed system is based on the IPO model which is a simple yet effective approach to efficiently manage online booking, pictorial records, and scheduling activities at Amaras Studio.



\begin{table}[h]
\centering
\caption{Development Tools Used in the Proposed System}
\renewcommand{\arraystretch}{1.5}

\begin{tabularx}{\textwidth}{ p{3cm} X X }
\hline
\textbf{Component} & \textbf{Specification} & \textbf{Purpose} \\
\hline

 Frontend & HTML & Structures the booking pages and pictorial gallery interface \\

\hline

             & JavaScript & Enables form validation and interactive booking features  \\
\hline
            & CSS & Handles booking processing, automated scheduling, validation, and server-side logic. \\
\hline

Backend &  Node.js  & Handles booking processing, automated scheduling, validation, and server-side logic \\

\hline

Database &  MySQL  & Stores client records, bookings, and pictorial data \\

\hline
\end{tabularx}
\end{table}


CSS (Cascading Style Sheets) is applied in the system to adjust the color, font, space, and layout of the web page including its background color, text color, font size, and so on. It results in the mapping of content from presentation, which makes the UI clean, more manageable, and easier to use. In this paper, CSS contributes to a better overall experience for the user, by providing a unified look and feel on all the pages of the system. It also enables responsive layouts so that the application can be used across different devices and screen sizes, which are crucial factors for accessibility and usability in web based system \cite{css_w3c_2024}.




\vspace{1em}

MySQL is a widely used open source RDBMS (relational database management system) that helps you store and manage your structured data. Structural Query Language (SQL) is used to perform the operations like add, retrieve or update data. The MySQL Reference Manual describes it as a "proven, reliable and scalable solution for managing large amounts of data for web-based applications” \cite{mysql2023docs}.In this web application MySQL is used as backend to store the customer details, booking details, timing and images. It is necessary for the system to be consistent, and it automates the reservation process with no risk of double booking.

\vspace{1em}
Node.js node is an open source, server side JavaScript runtime environment based on V8 JAVA script engine that allows to execute JavaScript outside the browser. It adopts non-blocking, event-driven I/O model, which makes the server capable of handling a large number of client requests at the same time. For the web based online booking and pictorial management system for Amaras Studio the Node.js is employed as the backend. It handles client booking requests and validates user input and runs business logic including automated scheduling and conflict detection to keep from double booking or schedule collisions.  Node.js facilitates the communication between the frontend and the MySQL database to add or fetch booking information, customer data, and service schedules.Its application increases system performance, flexibility, and response rate and can be used for real-time reservations processes \cite{nodejs_2024}.
v
\vspace{1em}
HTML (Hypertext Markup Language) is the standard language for writing web pages and web applications. It defines the organization and appearance of elements including, but not limited to, forms, tables and images. The World Wide Web Consortium (W3C) also acknowledges HTML as the foundation technology in the development of web systems \cite{w3c2021html}. In the above system, the user interface in booking forms, dashboard and pictorial gallery etc are designed using html, through which the user is provided an organized and easy way to use the system.
\vspace{1em}

JavaScript is a client scripting language that is used by web applications to provide more interactivity and usability. It is also used for dynamic content and for events, and to communicate asynchronously, without having to reload the page.  Modern web-based documents treat JavaScript as a vital component in creating interactive and real-time web systems \cite{mdnjs2025}. JavaScript is used in this system to provide real-time schedule checking, form validation, and dynamic user interface features, thereby enhancing the user satisfaction and the booking procedure efficiency.

\subsection{System Security and Data Privacy}
The web-based system is designed with the right security level to protect private user information and to maintain system stability. User authentication is performed with secure login procedures and system access is limited according to roles, e.g. administrator and client, using Role-Based Access Control (RBAC). Transport Layer Security (TLS), an encryption protocol, is used to encrypt communications between users and the application to protect the data transmission. Moreover, input validation and filtering-based XSS prevention are also integrated. Nevertheless, these security provisions together guarantee the confidentiality, integrity and availability of the data in accordance with the The Implementing Rules and Regulations of the Data Privacy Act of 2012 which mandates the organization to provide for adequate organizational, physical and technical measures of security and other requirements to protect personal data from any form of abuse\cite{npc2021}.


\subsection{Cloud Infrastructure and Deployment}
The proposed web-based system is implemented with a cloud-tenant service model with consideration of availability, scalability, and dependability. The system is designed with a client-server model, where users connect to the platform using web browsers and the backend services run on a remote cloud server which deals with the application logic and performs the database operations. Cloud infrastructure allows for resource provisioning on-demand, enabling the system to scale seamlessly as the number of users grows. The MySQL database is kept in a production environment which is secured, backed up regularly, and with limited access for data integrity and availability. Moreover, the implementation makes use of secure hosting services which including the possibility to send data back and forth encrypted via HTTPS between client and server. These are in line with the modern cloud computing solutions underpin the digital transformation by delivering scalable and flexible and secure system deployment \cite{merlo2025}.

\subsection{Technical Feasibility and Cost Management}

The following section outlines the estimated financial requirements for the development, deployment and summary of the proposed Web-Based Online Booking and Pictorial Management System for Amaras Studio with Automated Scheduling. The estimates cover development, deployment and summary cost. A contingency of 10 percent is included to address any unforeseen expenses. 

\vspace{1em}
\section*{Development Cost}
\begin{table}[h]
\centering
\caption{Estimated Development Cost}
\begin{tabular}{p{4cm} p{5cm} r r}
\toprule
\textbf{Components} & \textbf{Specification} & \textbf{Estimated Cost (PHP)} \\
\midrule

Internet Connection & Converge  & 6,000.00\\
Development Tools & Node.js, MySQL and Visual Studio Code & 0.00\\
\addlinespace
Contingency 10\% &   & 600.00\\
\multicolumn{3}{l}{Total Development Cost} 6,600.00 \\

\bottomrule
\end{tabular}
\end{table}

This table  of development cost of the proposed system, which details the major resources and costs that would be needed for development in the development stage. It reveals that up to the internet connection was the highest cost with an amount of 6,000.00, the development tools like MySQL,etc. are free of cost. A contingency amounting to 600, thus the development cost estimated to 6,600.00 which suggests that the project is somewhat low-cost and financially feasible.


\vspace{1em}
\section*{Deployment Cost}
\begin{table}[h]
\centering
\caption{Estimated Deployment Cost}
\begin{tabular}{p{4cm} p{5cm} r r}
\toprule
\textbf{Item} & \textbf{Description} & \textbf{Monthly Fee} & \textbf{Amount} \\
\midrule

Hostinger & Cloud Data Based Service Hostinger  & 90.00 & 540.00 \\

\addlinespace
\multicolumn{3}{l}{Contingency 10 percent} & 60.00 \\
\multicolumn{3}{l}{Total Deployment Cost} & 600.00 \\

\bottomrule
\end{tabular}
\end{table}
\vspace{1em}

The table 4 shows the anticipated monthly expenses to operate the system online by the proponent. The system will be hosted on Cloud, with Hostinger as the Cloud hosting provider and the database and system both will be hosted using Hostinger. The hosting fee is 90.00 per month so this makes a total of 540.00 a month. Basic expense required to keep the system running. This figure covers the basic cost to spend to keep the system running. In anticipation of such unforeseen costs as system maintenance, a 10 percent contingency cost is added, to account for these potential unexpected costs. Ten percent of 540.00 is 60.00. The total deployment cost becomes 600.00 per month.


\section*{Summary Cost}
\begin{table}[h]
\centering
\caption{Estimated Deployment Cost}
\begin{tabular}{p{4cm} p{8cm} r r}
\toprule
\textbf{Category} & \textbf{Estimated Cost} \\
\midrule
Development Cost & 8,100.00 \\
Deployment Cost & 600.00 \\
Total Initial Cost & 8,700.00\\

\bottomrule
\end{tabular}
\end{table}
\vspace{1em}
The table above shows how much cost will be spent upon development and deployment of the system on the client. The estimated total initial cost of 8,700 for development and deployment of the system.

\vspace{1em}
\newpage

% ------------------------------------------
% SECTION IV
% ------------------------------------------
\section{Design and Methodology}

This section details the blueprint for building and evaluating the system. It covers the chosen software development methodology, strict system requirements, architectural design diagrams, and the rigorous testing and evaluation instruments that will be used to ensure system quality and user acceptance.



\subsection{Development Methodology}
Rapid Application Development (RAD) is a process similar to the traditional system development life cycle (SDLC), but it places a heavy emphasis on a very short development cycle. In addition, RAD is different from traditional sequential models in that it enables developers to rapidly create executable prototypes and refine them through user feedback prior to deciding on the system architecture. It can be described by the development time and the flexibility in terms of quickly responding to change or adaptability in the development cycle.
There are in general four phases in the RAD model: business modeling, user design, construction and cutover. Developers and end users work together in the requirements planning to design system goals and requirements. The user design stage focuses on building prototypes which are iterative refined through user feedback. Rapid construction is a phase where developers construct the system using iterative cycles in modular form, now focusing on testing, deployment, and user training as part of the implementation phase.
The RAD approach is suitable for building up such web based environment, hence the model is also used in this work. As a result, the system can be evolved and tailored along with the evolving user needs leading to more efficient and intuitive application.



\begin{figure}[h!]
    \centering
    \includegraphics[width=0.9\linewidth]{Rapid.png}
    \caption{Rapid Application Development (RAD Model)}
    \label{fig:agile_model}
\end{figure}

\vspace{1em}
The developers and users talk about the goals, problems, and requirements of the system during the Requirements Planning stage to determine which features and functions are necessary. Prototypes and screen designs are developed and iteratively refined using user feedback on system usability and performance during the User Design stage. In the Development phase, the system is actually developed, coded, tested, debugged and integrated with features in rapid development cycles. And so, in the Cutover phase, the system is finished, deployed and made ready to be put to use with data conversion, user training, final testing, and system implementation to validate that the application functions correctly and satisfies the users.

\subsection{System Requirements}
The system requirements outline the necessary hardware, software, and operational requirements needed for the Web-Based Online Booking and Pictorial Management System for Amaras Studio with Automated Scheduling to function properly. These are divided into requirements for the proponents during development and for the end-users Amaras Studio staff and guests during deployment and access.



\begin{table}[h]
\centering
\caption{Developer’s Hardware Specifications}
\begin{tabular}{ll}
\hline
\textbf{Components} & \textbf{Specification} \\
\hline
Processor & Intel(R) Core(TM) i5-4310M CPU @ 2.70GHz   2.70 GHz \\
RAM & 8.00 GB (7.89 GB usable) \\
Storage & 119 GB SSD SATA SSD \\
Internet & Speed \\
\hline
\end{tabular}
\end{table}

\begin{table}[h]
\centering
\caption{Developer’s Software Specifications}
\begin{tabular}{ll}
\hline
\textbf{Components} & \textbf{Specification} \\
\hline
 Operating System & Windows 10/11, Linux, or macOS \\
Web Browser & Google Chrome, Mozilla Firefox, Microsoft Edge \\
Development Tools & Visual Studio Code, Git ,MySQL\\
System Type & 64-bit operating system, x64-based processor \\

\hline
\end{tabular}
\end{table}

\vspace{1em}


\noindent\textbf{Processor} - The processor acts as the main component that runs the system and the applications -processes in the development of the proposed system. The Intel Core i5 processor has enough power to handle coding, db management, system testing, running several dev tools at once. This led to faster execution of the development work and contributed to the improvement of the system development process.

\vspace{1em}
\noindent\textbf{RAM } – Multitasking and a smooth system performance while developing is supported with availability of Random Access Memory (RAM). The 8 GB of RAM ensures that the researchers can use the development applications like Visual Studio Code, MySQL, web browsers, and local servers all at once without any major performance issues. Proper memory allocation also helps reduce system lag and enhances testing and debugging.

\vspace{1em}
 \noindent\textbf{Storage} -  The Solid-State Drive (SSD) features fast and dependable storage to system files, source codes, databases, and development tools. Both times are faster with SSD storage, file access is quicker, and applications load more quickly than they do on traditional hard disk drives. The build productivity is increased in particular the developers are likely to benefit during system compile, test and install processes.

\vspace{1em}
 \noindent\textbf{System Type} - A 64-bit OS and x64-based processor are required because they are necessary for the modern web development tools, they allow you to use also a larger amount of RAM and more system resources. This type of system ensures that the proposed application can be executed more efficiently in the development process for running development environments, databases, and other support software.

\vspace{1em}
 \noindent\textbf{Internet} - A good internet connection required for building and running the proposed web-based system. Developers enable themselves to download libraries and dependencies, utilize cloud-based services, perform system updates, manage version control with Git, and deploy the application on the net, by gaining access to the internet. It facilitates real-time testing and system availability during development and execution.



\subsection{Conceptual Design and Architecture}
The architecture of the proposed system for Amaras Studio is based on three layers,Presentation Layer, Business Layer, Data Access Layer.This design pattern guarantees the separation of concerns making the system scalable, maintainable,and able to respond efficiently to user/data interaction.
\vspace{1em}

\hspace{0.5em}The Presentation Layer is the Amaras Studio web-based system’s user interface. It is written in HTML and Javascript and users like clients and administrators access it through a web browser. This tier clients to take certain actions (depending on what they need): view services offered, check schedules, send booking requests. It should also contain key information such as confirmations, alerts, and service details. The purpose of this layer is to provide a good and responsive interface for a better user experience.
\vspace{1em}

\hspace{0.5em}The Application Layer, all application logic and processing is performed here, and it runs centrally on this layer. It’s written with Node.js and hosted on Hostinger. It accepts and returns requests to the Presentation Layer and executes the system rules and logic. For example, a client at Amaras Studio reserves a service and the Application Layer does the input validation, availability check against schedule, the booking transaction processing and the storing of booking information to the database. It also provides critical services such as user authentication, session management, and error handling that allow the system to run securely and dependably.
\vspace{1em}

\hspace{0.5em}The Data Layer stores and manages all the data related to the system. It uses MySQL as a DBMS, too on Hostinger. This layer holds vital information including customer, booking, services and transactions. It guarantees the integrity and consistency of the data, and the effectiveness of its retrieval by means of queries formatted in a structured way. The Application Layer interacts with the Data Layer to save new data and fetch existing records when required.

\newpage

\begin{figure}[h!]
        \centering
        \includegraphics[width=1\linewidth]
        {System Architecture.png}
    \caption{System Architecture of the Proposed System}
           \label{fig:placeholder}
    \end{figure}

\subsection{Project Schedule and Management}
The creation of the Amaras Studio Web-Based Booking Pictorial System is driven by tailored project timelines that project to be completed in phases to meet deadlines. The WBS is developed for the entire project process, including the phases requirements gathering, system planning, interface design, development, testing, and deployment, which is assigned with a time and responsibility. A Gantt Chart related is constructed to display the time line of a project, with activities, their duration, and dependent tasks, to be able to follow up on activities, milestones, and possible delays by the team of development. Also the development process is iterative and based on the Rapid Application Development (RAD) model with continuous feedback and refinements. By effective planning and delegation, with close supervision and monitoring, the team is able to develop a system that is efficient, high-quality, and on schedule.

\subsubsection{Work Breakdown Structure}  The Work Breakdown Structure,along to Annex (A.1) demonstrates and List all of the work needed to use in a project. It divides the part of work into manageable segments in order for the team to plan,schedule, and monitor what is Getting Done and achieved in time.By clearly shows what each task is,how long it takes,and what needs to be done first,WBS makes sure that all tasks are covered and guides the team in working towards the project goals efficiently.

\subsubsection{Gantt Chart}
The Gantt Chart as ashown in Annex (A.2), which shows the project schedule that highlights the time period of each activity for the development of the Web-Based Booking and Pictorial Management System for Amaras Studio. It displays the order of activities, their durations and the relationships between them so the development team can track progress and manage time at various levels throughout the development process. This also can be used to determine dependencies of tasks and overlaps of tasks; to make adjustments as needed by the team. By using the Gantt Chart, the development team can track that all the project activities are well integrated, finished on the time and consistent with the goals of the project.

\subsection{Testing and Evaluation}
The Web-based Booking and Pictorial Management System for Amaras Studio will be fully tested and reviewed for quality and working and reliability. The system will undergo different types of tests such as functional testing, usability testing and performance testing. Functional testing will be performed to ensure that all the functionality such as booking, schedule, user management are working as per the requirement. Testing for usability will be performed to determine the system ease of use, the user interface, the overall user experience for both clients and administrators to ensure that they are able to work up to their full potential within the sytem. Performance test will also be executed to evaluate the responsiveness and stability of the system under normal operation. In addition, User Acceptance Testing (UAT) will be carried out with a group of selected users from Amaras Studio, staff and clients, to determine if it is meeting their requirements and expectations. Comments received during the testing period will be used to report bugs, enhance system performance and features. The researchers expect to have an accurate, data integrity protected, reliable, and user friendly system by the end of the system testing and evaluation procedures to satisfy its users.

\subsubsection{Evaluation Instrument}
The evaluation of the Web Based Online Booking and Pictorial Management System for Amaras Studio will be conducted using a User Acceptance Testing (UAT) questionnaire by developers. This tool is derived for the ISO/IEC 25010:2023 Software Quality Model which is a standard for measuring software quality in terms of functional and user satisfaction. Focus of the questionnaire on quality of services (functional suitability, performance efficiency and reliability) with some applicability in quality of business services. Functional suitability checks if the system provides the necessary features, including online booking, schedule management, and user account features. Performance efficiency is a measure of how quickly the system responds and how well the system manages several users. Reliability considers the system’s consistency and its capacity to handle errors .
The User Acceptance Testing (UAT) as shown in Annex (A.E), will be given to respondents (clients and staff members of Amaras Studio) for them to offer feedback grounded on their direct experience with the system. A Likert scale will be utilized to rate their answers from strongly disagree to strongly agree to assess the level of user satisfaction as well as system acceptability. The findings from the assessment shall be utilized to recognize improvement potential and to evaluate system performance in general, quality wise.

\subsubsection{Respondents of the Study}
The respondents were purposively selected, which allowed the researchers to deliberately select participants that would have the right knowledge, experience, and capacity related to the processes and services of the Amaras Studio. The selected respondents are the studio’s clients as well its staff, since they are the target and direct users of the Web-Based Online Booking and Pictorial Management System with Automated Scheduling. The clients were selected as they will be using the online booking and scheduling services and the staff members because they are the ones that have to handle the bookings, the schedules, and the pictorial documentation. This technique of sampling was deemed suitable as it guarantees that the source of information were those who are well acquainted with the process and are expected to provide sincere and meaningful assessment of the system in terms of its functionality, usability, reliability, efficiency and overall performance. Also, the response of the chosen target respondents will also be the basis for evaluating the acceptability and efficiency of the system in meeting the needs of the day to day operations of the Amaras Studio.



\begin{table}[h!]
\centering
\caption{Respondents}
\begin{tabular}{lc}
\hline
\textbf{Respondents Category} & \textbf{Number of Evaluators} \\
\hline
Amaras Studio Staff & 5 \\
Clients & 20 \\
Total & 25 \\
\hline
\end{tabular}
\label{tab:respondents}
\end{table}

\subsubsection{Statistical Treatment of Data}
To interpret the User Acceptance Testing (UAT) results for the Amaras Studio Web Based Booking and Management System, the staff is going to utilise descriptive statistics with the weighted mean as the main instrument for data analysis. The assessment tool is a structured questionnaire with items adapted to a chosen set of quality attributes from the ISO/IEC 25010 model (Functional Suitability, Usability, and Reliability) and every attribute is rated by using a five-point Likert Scale. The opinions received from the selected participants/users (both staff members, clients, and IT specialists) will be aggregated and analyzed to evaluate the overall acceptability and performance of the system.

\begin{table}[h]
\centering
\caption{Likert Scale Interpretation}
\begin{tabular}{l l l}
\hline
 Mean Range & Interpretation \\
\hline
   4.21 -- 5 & Strongly Agree \\
   3.41 -- 4.20 & Agree \\
   2.61 -- 3.40 & Neutral \\
   1.81 -- 2.60 & Disagree \\
   1.00 -- 1.80 & Strongly Disagree \\
\hline
\end{tabular}
\end{table}
% ------------------------------------------
% REFERENCES SECTION (Follows Section IV in a Proposal)
% ------------------------------------------
\newpage
\bibliographystyle{ACM-Reference-Format}
\bibliography{references}

% ==========================================
% ANNEXES / APPENDICES
% ==========================================
\newpage
\appendix

% ------------------------------------------
% FORMATTING FIX: Change "Section I" to "Annex A"
% ------------------------------------------
\renewcommand{\thesection}{\Alph{section}}
\titleformat{\section}{\titlefont\fontsize{12}{14.4}\selectfont\bfseries}{Annex \Alph{section} - }{0em}{}
\titleformat{\subsection}{\titlefont\fontsize{12}{14.4}\selectfont\bfseries}{\Alph{section}.\arabic{subsection} }{0em}{}

% ------------------------------------------
% ANNEX TITLE PAGE
% ------------------------------------------
\vspace*{3in}
\begin{center}
    {\titlefont\fontsize{17}{20.4}\selectfont\bfseries ANNEXES}
       
\end{center}
\newpage

% ------------------------------------------
% ANNEX A: PROJECT MANAGEMENT
% ------------------------------------------
\vspace*{3in}
\section{Project Schedule and Work Breakdown Structure}

This section contains the Work Breakdown Structure (WBS) and the Gantt Chart, detailing the timeline, milestones, and task allocations for the entire capstone project lifecycle.


\subsection{Work Breakdown Structure (WBS)}
    



% Times New Roman style

\vspace{0.8em}

\noindent
\begin{tabular}{c p{8cm} c c}
\hline
\textbf{Task ID} & \textbf{Minimum Requirements} & \textbf{Duration} & \textbf{Predecessor} \\
\hline

\multicolumn{4}{l}{\textbf{Requirements Planning}} \\
1 & Identifying the Client & 5d & T1 \\
2 & Identifying the Client Problem & 4d & T2 \\
3 & Identifying the Solution & 5d & T3 \\
4 & Defining Project Scope & 4d & T4 \\
5 & Creating Document Requirements & 12d & T5 \\
\hline

\multicolumn{4}{l}{\textbf{User Design}} \\
6 & Creating Diagrams & 10d & T6 \\
7 & Wireframing and Prototype & 25d & T7 \\
8 & Usability Testing & 10d & T8 \\
9 & Design Validation/Redesigning & 14d & T9 \\
\hline

\multicolumn{4}{l}{\textbf{Construction}} \\
10 & Development of Frontend and Backend & 75d & T10 \\
11 & Integration of Queries and Stacks & 10d & T11 \\
12 & Adjustment & 10d & T12 \\
13 & Testing & 26d & T13 \\
\hline

\multicolumn{4}{l}{\textbf{Cutover}} \\
14 & Deployment Planning & 2d & T14 \\
15 & System Deployment & 23d & T15 \\
16 & System Evaluation and User Training & 13d & T16 \\
\hline

\end{tabular}

\newpage
\begin{landscape}

\subsection*{A.2 Gantt Chart}

\begin{figure}[h!]
       \centerering
            \includegraphics[width=1\linewidth]
            {gantt chart2.png}
    \label{fig:gantt}
\end{figure}

\end{landscape}
    
\newpage

% ------------------------------------------
% ANNEX B: SRS
% ------------------------------------------
\section{Software Requirements Specification (SRS)}
The Software Requirement Specification (SRS) document is a complete description of the Web Based Online Booking and Pictorial Management System for Amaras Studio with Auto Scheduling. This document describes the general architecture of the system and its functional as well as non-functional features and requirements. It acts as a roadmap for developers, researchers, and stakeholders to establish what the system aims to do and what it is expected to do. The SRS definition helps to define all the requirements clearly before the development starts, leading to less misunderstanding and better quality of the system.

\vspace{1em}
The web-based system is introduced, which provides features that help to automate the booking and management process at Amaras Studio. Appointment scheduling and client information management are both conducted manually at the moment, which could result in scheduling errors, miscommunication, and poor record keeping. With this system, clients will be able to view the photography services on offer, see if the timetable allows for an appointment and make appointments online. It also enables customers to upload their requirements, check booking status and get informed about their appointments.

\vspace{1em}
In addition, the system can be used by staff members and the administrator to handle the services, appointments, bookings and customers.The auto schedule tool can help avoid double bookings and better time organization. The system will further be equipped with report generation to keep track of bookings, clients and studio performance. With these processes automated, the system will increase the efficiency of operation, relieve manual work, and improve customer experience.

\vspace{1em}
Moreover, this SRS includes user role, system constraints, performance requirements, and usability considerations. This makes the system reliable, secure, and friendly not only to the clients but to the administrators as well. The document is also used as a reference during system development, testing and implementation to verify that all the requirements are fulfilled and the end system is in line with the goals of Amaras Studio.


\newpage

\caption{Definitions and Abbreviations}
\vspace{0.8em}

\begin{tabular}{p{3cm} p{10cm}}
\hline
\textbf{Term} & \textbf{Definition} \\
\hline

SRS   & Software Requirements Specification \\

Admin & System administrator \\

Client & Customer of Amaras Studio \\

Staff & Studio personnel managing bookings \\

FR    & Functional Requirement \\

NFR   & Non-Functional Requirement \\

UAT   & User Acceptance Testing \\

\hline
\end{tabular}


\vspace{2.5em}


\caption{User Classes and Characteristics}
\vspace{0.8em}

\begin{tabular}{p{4cm} p{10cm}}
\hline
\textbf{User Class} & \textbf{Definition} \\
\hline

\textbf{Client} &
Low to moderate technical knowledge \newline
Can browse services \newline
Can book photo sessions \newline
Can upload requirements \newline
Can view booking status \\

\textbf{Staff} &
Moderate technical knowledge \newline
Manages bookings \newline
Updates schedule \newline
Uploads outputs \newline
Handles client requests \\

\textbf{Admin} &
High technical knowledge \newline
Full system control \newline
Manages services \newline
Manages users \newline
Generates reports \\

\hline
\end{tabular}

\newpage

\subsection{Functions Requirement}
\section*{User Authentication and Authorization}
\begin{}
   
\centering
\begin{tabular}{llp{7cm}}
\hline
ID & Requirement & Description \\
\hline
FR-001 & User Registration & The system shall allow clients to create an account using name, email, contact number, and password. \\
FR-002 & User Login & The system shall allow registered users to log in using valid credentials. \\
FR-003 & Role Management & The system shall provide role-based access for Admin, Staff, and Clients. \\
FR-004 & Logout & The system shall allow users to securely log out of the system. \\
\hline
\end{tabular}
\end{table}

\vspace{2.5em}

\subsection*{Service Management}

\begin{tabular}{llp{8cm}}
\hline
\textbf{ID} & \textbf{Requirement} & \textbf{Description} \\ \hline

FR-005 & View Services & The system shall display available photography services offered by Amaras Studio. \\ \hline

FR-006 & Service Details & The system shall show service description, price, and duration. \\ \hline

FR-007 & Manage Services & Admin shall add, edit, and delete services. \\ \hline

\end{tabular}

\vspace{2.5em}

\subsection*{Booking and Scheduling}

\begin{Table}
\centering
\begin{tabular}{p{2cm} p{4cm} p{8cm}}
\hline
\textbf{ID} & \textbf{Requirement} & \textbf{Description} \\
\hline

FR-008 & View Schedule & Clients shall view available booking dates and time slots. \\

FR-009 & Book Appointment & Clients shall book photography sessions online. \\

FR-010 & Booking Confirmation & The system shall display booking confirmation after submission. \\

FR-011 & Prevent Double Booking & The system shall prevent scheduling conflicts. \\

FR-012 & Booking Status & Clients shall view booking status (Pending, Approved, Completed). \\

FR-013 & Cancel Booking & Clients shall cancel booking before scheduled date. \\

\hline
\end{tabular}

\vspace{2.5em}
\end{tabular}
\end{table}
\subsection*{Client Management}

\begin{table}[h]
\centering
\begin{tabular}{p{2cm} p{4cm} p{8cm}}
\hline
\textbf{ID} & \textbf{Requirement} & \textbf{Description} \\
\hline

FR-014 & Client Records & Staff shall view client information. \\

FR-015 & Update Client Information & Admin shall update client records. \\

\hline
\end{tabular}
\end{table}

\vspace{2.5em}

\subsection*{File Upload and Output Delivery}



\begin{tabular}{p{2cm} p{4cm} p{8cm}}
\hline
\textbf{ID} & \textbf{Requirement} & \textbf{Description} \\
\hline

FR-016 & Upload Requirements & Clients shall upload reference images or instructions. \\

FR-017 & Upload Output & Staff shall upload final edited photos. \\

FR-018 & Download Output & Clients shall download completed outputs. \\

\hline
\end{tabular}


\section*{Reports Module}
\begin{tabular}{p{2cm} p{4cm} p{8cm}}
\hline
\textbf{ID} & \textbf{Requirement} & \textbf{Description} \\
\hline

FR-019 & Booking Report & Admin shall generate booking reports. \\
FR-020 & Client Report & Admin shall generate client reports. \\
FR-021 & Revenue Report & Admin shall generate income reports. \\

\hline
\newpage
\end{tabular}


% Title
    
\subsection{Non-Function Requirements}
\section*{Function Suitability}
\begin{}
\centering
\begin{tabular}{llp{7cm}}
\hline
ID & Requirement & Description \\
\hline
NFR-001 & User Registration & The system shall allow clients to create an account using name, email, contact number, and password. \\
NFR-002 & User Login & The system shall allow registered users to log in using valid credentials. \\
NFR-003 & Role Management & The system shall provide role-based access for Admin, Staff, and Clients. \\
NFR-004 & Logout & The system shall allow users to securely log out of the system. \\
\hline
\end{tabular}
\end{table}


\section*{Reliability}
\begin{Table}
\centering
\begin{tabular}{llp{7cm}}
\hline
ID & Requirement & Description \\
\hline
NFR-008 & System Availability &
The system shall be available to users at least 99\% of the time, ensuring continuous access to booking and scheduling services except during scheduled maintenance. \\

NFR-009 & Fault Tolerance &
The system shall continue to operate properly even in the presence of minor system errors or failures without affecting core functionalities such as booking and scheduling. \\

NFR-010 & Data Recovery &
The system shall automatically back up booking records, client information, and pictorial data, and allow recovery in case of system failure or data loss. \\

NFR-011 & Error Handling &
The system shall detect, log, and handle system errors gracefully by providing appropriate error messages without crashing the application. \\

NFR-012 & System Stability &
The system shall maintain stable operation during both normal and peak usage, ensuring no loss of data or interruption in booking processes. \\

\hline
\end{tabular}
\end{table}

\newpage

\section*{Usability}
\begin{Table}
\centering
\begin{tabular}{llp{7cm}}
\hline
ID & Requirement & Description \\
\hline
NFR-013 & Learnability &
The system shall be easy to learn for new users, allowing clients and staff to understand and use the booking and scheduling features with minimal guidance. \\

NFR-014 & Operability &
The system shall provide a user-friendly interface that allows users to easily navigate, book services, and manage schedules without confusion. \\

NFR-015 & User Interface Consistency &
The system shall maintain consistent layout, design elements, and navigation across all pages to improve user experience. \\

NFR-016 & Accessibility &
The system shall be accessible through standard web browsers and devices, allowing users to access the platform anytime with internet connectivity. \\

NFR-017 & Error Prevention and Feedback &
The system shall provide clear instructions, validation messages, and feedback to prevent user errors and guide users during booking processes. \\

\hline
\end{tabular}
\end{table}

\section*{Security}
\begin{Table}
\centering
\begin{tabular}{llp{6cm}}
\hline
ID & Requirement & Description \\
\hline

NFR-018 & User Authentication &
The system shall require users to log in using valid credentials (username and password) before accessing protected features. \\

NFR-019 & Data Privacy &
The system shall ensure that all client information and booking data are securely stored and protected from unauthorized access. \\

NFR-020 & Role-Based Access Control &
The system shall restrict access to system features based on user roles (e.g., Admin and Client). \\

NFR-021 & Data Encryption &
The system shall use encryption (e.g., HTTPS) to protect data transmitted between users and the system. \\

NFR-022 & Input Validation &
The system shall validate all user inputs to prevent malicious data entry such as SQL injection and other attacks. \\
\hline
\end{tabular}
\end{table}

\section*{Performance Efficiency}
\begin{Table}
\centering
\begin{tabular}{llp{7cm}}
\hline
ID & Requirement & Description \\
\hline
NFR-005 & Response Time & The system shall respond to user requestsSystem Throughput (e.g., booking, login, and data retrieval) within 3 seconds under normal operating conditions.  \\
NFR-006 & System Throughput & The system shall be capable of handling multiple users simultaneously without performance degradation. \\
NFR-007 &  Resource Utilization  & The system shall efficiently utilize server resources (CPU, memory, and storage) to ensure smooth operation even during peak usage. \\
NFR-008 &  Scalability & The system shall support future growth by accommodating an increasing number of users, bookings, and data without significant performance loss. \\
\hline
\end{tabular}
\end{Table}

\vspace{1cm}
\hspace{0.5em}The system has a number of constraints in the legal, technical, and business areas. Legally, the system should comply with the Republic Act No. 10173 or the Data Privacy Act of 2012 and should guarantee that personal information of clients including booking details and pictorial records must be handled and secured properly.
Technically, the application is built using PHP and MySQL as the backend and Frontend and it is accessed via web browsers, the internet connectivity is required for users to make use of the booking, scheduling and administrative functions. The system’s performance could be influenced by network conditions and the availability of the server. Also, the system depends on third-party services such as hosting providers and may be subject to their availability and performance. The automated schedule generation relies on proper user data input and processing by the system.
From a business view point, the project is constrained with the capstone duration and resources. Booking system is developed exclusively for Amaras Studio and it is based only on booking and work-flow of pictorials. At first, it doesn’t have external system integration or multi-branch process. Later modifications, including mobile app support and additional features are beyond this study's scope.


\newpage
% ------------------------------------------
% ANNEX C: UML DIAGRAMS
% ------------------------------------------
\section{UML Diagrams}
[Insert the complete set of Unified Modeling Language diagrams here to illustrate the system's structural and behavioral design.]
\newpage
\subsection{Use Case Diagram}
% \includegraphics[width=0.9\textwidth]{usecase.png}

\begin{figure}[h!]
        \centering
        \includegraphics[width=1\linewidth]{Use Case Diagram.png}
   
\end{figure}

\newpage

\vspace{1em}
\subsection{Activity Diagrams}
% \includegraphics[width=0.9\textwidth]{activity.png}
\begin{figure}[h!]
    \centering
    \includegraphics[width=1\linewidth]{Activity Diagram.png}
    
   
\end{figure}

\newpage

\vspace{1em}
\subsection{Sequence Diagrams}
% \includegraphics[width=0.9\textwidth]{sequence.png}
\begin{figure}[h!]
    \centering
    \includegraphics[width=1\linewidth]{Sequence Diagram.png}

        
\end{figure}

\newpage

\vspace{1em}
\subsection{Entity Relationship Diagram (ERD)}
% \includegraphics[width=0.9\textwidth]{erd.png}
\begin{figure}[h!]
    \centering
    \includegraphics[width=1\linewidth]{Entity Relationship Diagram.png}
    
   
\end{figure}



\newpage

% ------------------------------------------
% ANNEX D: SYSTEM TEST CASES
% ------------------------------------------
\vspace*{3in}
\section{System Test Cases and Performance Reports}
This section outlines the functional test cases to ensure all system modules perform as expected under various conditions. Future performance and security testing reports will also be appended here.

\begin{landscape}
    \begin{table}[h!]
        \centering
        \caption{Functional Test Cases for Core Modules}
        \label{tab:test_cases}
        \vspace{0.5em}
        
        % The 'c X X X X c' format gives us 6 columns. 
        % 'X' allows the text in the middle columns to wrap neatly into paragraphs.
        \begin{tabularx}{\linewidth}{c X X X X c}
            \toprule
            \textbf{Test ID} & \textbf{Pre-Condition} & \textbf{Test Steps} & \textbf{Expected Result} & \textbf{Actual Result} & \textbf{Status} \\
            \midrule
            TC-001 & User is on the login page with an unregistered account. & 1. Enter unregistered email. \newline 2. Enter password. \newline 3. Click "Login". & System denies access and displays "Account not found" error. & & pending \\
            \addlinespace
            TC-002 & User is on the registration page. & 1. Leave all fields blank. \newline 2. Click "Submit". & System halts submission and highlights required fields in red. & & pending  \\
            \addlinespace
            TC-003 & System is running, and the internet connection is disabled. & 1. Turn off Wi-Fi. \newline 2. Submit new inventory data. & Offline mode activates; data is cached locally in the browser via Service Worker. & & pending \\
            \addlinespace
            TC-004 & Admin is logged into the dashboard. & 1. Navigate to Reports. \newline 2. Click "Generate Monthly PDF". & System successfully compiles data and triggers a PDF file download. & & pending \\
            \bottomrule
        \end{tabularx}
    \end{table}
\end{landscape}

\newpage

\begin{landscape}
\begin{table}[h!]
\centering
\caption{Interactive Route Navigation Test Cases}
\label{tab:interactive_route}

\begin{tabular}{lp{4cm} p{4cm} p{5cm} p{3cm} l }
\hline
\textbf{Test ID} & \textbf{Pre-Condition} & \textbf{Test Steps} & \textbf{Expected Result} & \textbf{Actual Result} & \textbf{Status} \\
\hline

TC-005 & User is on booking page & 
1. Select a service \newline
2. Choose available schedule & 
System highlights selected schedule on the calendar & & pending \\

TC-006 & Schedule is selected & 
1. Click ``View Details'' & 
System displays full booking details (date, time, service) & & pending \\

TC-007 & User selects date \& time & 
1. Input client details \newline
2. Click ``Confirm Booking'' & 
System confirms booking and saves data to database & & pending \\

TC-008 & Multiple schedules available & 
1. Compare available time slots & 
System shows available schedules without conflicts & & pending \\

TC-009 & User attempts duplicate booking & 
1. Select already booked time slot & 
System prevents double booking and shows error message & & pending \\

TC-010 & User completes booking & 
1. Submit booking form & 
System sends confirmation notification to user & & pending \\

TC-011 & Admin logged in & 
1. View booking list & 
System displays all client bookings correctly & & pending \\

TC-012 & Admin manages schedule & 
1. Update schedule availability & 
System updates schedule in real-time & & pending \\
\hline

\end{tabular}
\end{table}
\end{landscape}

\begin{landscape}
\begin{table}[h!]
\centering
\caption{Booking Notification and Alerts Test Cases}
\label{tab:interactive_route}

\begin{tabular}{lp{4cm} p{4cm} p{5cm} p{3cm} l }
\hline
\textbf{Test ID} & \textbf{Pre-Condition} & \textbf{Test Steps} & \textbf{Expected Result} & \textbf{Actual Result} & \textbf{Status} \\
\hline

TC-013 & User has an active booking &
1. Scheduled session is approaching &
User receives session reminder notification & & pending \\

TC-014 & Schedule conflict occurs &
1. System detects overlapping bookings &
System sends conflict notification to admin/user & & pending \\

TC-015 & User enables notifications &
1. Turn on notifications in settings &
Notifications are activated successfully & & pending \\

TC-016 & Booking is confirmed &
1. Complete booking process &
User receives booking confirmation notification & & pending \\

TC-017 & Schedule is updated &
1. Modify booking schedule &
User receives schedule update alert & & pending \\

TC-018 & Session is near scheduled time &
1. System triggers reminder &
User receives session reminder notification & & pending \\
\hline

\end{tabular}
\end{table}
\end{landscape}

\begin{landscape}
\begin{table}[h!]
\centering
\caption{Admin Functions Test Cases}
\label{tab:interactive_route}

\begin{tabular}{lp{4cm} p{4cm} p{5cm} p{3cm} l }
\hline
\textbf{Test ID} & \textbf{Pre-Condition} & \textbf{Test Steps} & \textbf{Expected Result} & \textbf{Actual Result} & \textbf{Status} \\
\hline
TC-019 & Admin is logged in &
1. Add new service/session \newline
2. Save &
Service/session is added and appears on dashboard & & pending \\

TC-020 & Admin manages bookings &
1. Edit booking details \newline
2. Save changes &
Updated booking reflects in the system & & pending \\

TC-021 & Admin monitors bookings &
1. View all scheduled sessions &
System displays all bookings with status (confirmed/cancelled) & & pending \\

TC-022 & Admin removes booking &
1. Delete booking \newline
2. Confirm &
Booking is removed from system & & pending \\

TC-023 & Admin manages schedule &
1. Update available time slots \newline
2. Save changes &
Schedule updates are applied in real-time & & pending \\
\hline

\end{tabular}
\end{table}
\end{landscape}

\begin{landscape}
\begin{table}[h!]
\centering
\caption{System and Non-Functional Testing Test Cases}
\label{tab:interactive_route}

\begin{tabular}{lp{4cm} p{4cm} p{5cm} p{3cm} l }
\hline
\textbf{Test ID} & \textbf{Pre-Condition} & \textbf{Test Steps} & \textbf{Expected Result} & \textbf{Actual Result} & \textbf{Status} \\
\hline
TC-024 & System under heavy load &
1. Simulate multiple users booking pictorial sessions &
System maintains performance without crash & & pending \\

TC-025 & Internet connection is unstable &
1. Submit booking form during connection interruption &
System shows error and resumes booking process  & &  pending \\

TC-026 & Server response is slow &
1. Confirm pictorial booking &
System processes booking once connection stabilizes & &  pending \\

TC-027 & Large number of bookings stored &
1. Retrieve client booking records &
System loads booking data efficiently without delay  & &  pending\\
\hline

\end{tabular}
\end{table}
\end{landscape}


% ------------------------------------------
% ANNEX E: EVALUATION INSTRUMENTS
% ------------------------------------------
\section{Evaluation Instruments}
 
\begin{document}
\begin{table}[h]    

\section*{Functional Suitability}
\begin{tabular} { p{5cm} p{10cm} }
\hline
\textbf{Sub-Characteristics} & \textbf{Description} \\
\hline

Functional Suitability & 

The system allows clients to book pictorial services online efficiently through an organized and user-friendly interface.

\vspace{0.5em}

The system provides accurate scheduling by allowing users to select available dates and time slots without conflict.

\vspace{0.5em}

Users can easily view available services, packages, and booking details within the system.

\vspace{0.5em}

The system supports automated scheduling, ensuring that bookings are properly recorded and managed in real-time.

\vspace{0.5em}

The system prevents double booking by validating selected schedules before confirmation.

\vspace{0.5em}

The system ensures that client information and booking details are stored accurately in the database.

\vspace{0.5em}

The platform allows administrators to manage bookings, schedules, and client records effectively.

\vspace{0.5em}

All booking and scheduling functionalities operate according to the defined system requirements.

\\
\hline
\end{tabular}
\end{table}



\newpage

\begin{table}[h]   
\section*{Reliability}
\centering
\renewcommand{\arraystretch}{1.5}
\begin{tabular} { p{5cm} p{10cm} }
\hline
\textbf{Sub-Characteristics} & \textbf{Description} \\
\hline

Reliability & 
The system ensures consistent and dependable performance by accurately processing online bookings and scheduling requests.

\vspace{0.5em}

The system prevents double booking through automated schedule validation, ensuring that all reservations are organized.

\vspace{0.5em}

Client and booking information are securely stored and maintained, reducing the risk of data loss and improving data integrity.

\vspace{0.5em}

Real-time updates allow users to view current availability and booking status without delays.

\vspace{0.5em}

The system maintains stable operation even when multiple users access the system simultaneously.

\vspace{0.5em}

Error messages are clear and guide users in resolving issues.

\vspace{0.5em}

The system is accessible across devices such as desktop and mobile.

\vspace{0.5em}

All records remain accurate and updated through proper system processes. \\

\hline
\end{tabular}
\end{table}

\newpage


\section*{Usability}

\begin{table}[h]
\renewcommand{\arraystretch}{1.5}
\begin{tabular} { p{5cm} p{10cm} }
\hline
\textbf{Sub-Characteristics} & \textbf{Description} \\
\hline

Usability &
The Amaras Studio system provides a user-friendly interface that allows clients to easily navigate booking options and services.

\vspace{0.5em}

Booking steps are simplified, enabling users to reserve schedules quickly without confusion.

\vspace{0.5em}

Clear labels, organized menus, and intuitive design improve user experience and reduce the need for assistance.

\vspace{0.5em}

The system ensures accessibility by making features easy to understand and use for both new and returning users. \\
\hline

\end{tabular}
\end{table}
\end{document}















 
