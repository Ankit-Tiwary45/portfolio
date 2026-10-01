import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def create_resume(output_filename):
    doc = SimpleDocTemplate(
        output_filename,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    # Custom Styles
    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        alignment=1, # Center
        textColor=colors.HexColor('#121212')
    )
    
    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        alignment=1, # Center
        textColor=colors.HexColor('#333333')
    )
    
    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=14,
        textColor=colors.HexColor('#121212'),
        spaceBefore=8,
        spaceAfter=3
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#222222')
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        leftIndent=12,
        textColor=colors.HexColor('#222222')
    )

    subheading_style = ParagraphStyle(
        'SubHeadingCustom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#121212')
    )

    story = []

    # Header
    story.append(Paragraph("ANKIT TIWARY", name_style))
    story.append(Spacer(1, 3))
    contact_text = (
        "IBD Raisina, Patel Nagar, Bhopal, 462022 &nbsp;|&nbsp; Phone: 8409039894<br/>"
        "Email: ankittiwary968@gmail.com &nbsp;|&nbsp; "
        "LinkedIn: linkedin.com/in/ankit-tiwary-99880a321 &nbsp;|&nbsp; "
        "GitHub: github.com/Ankit-Tiwary45"
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 6))

    def add_section(title):
        story.append(Paragraph(title.upper(), section_heading))
        story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#121212'), spaceBefore=1, spaceAfter=4))

    # Summary
    add_section("Summary")
    summary_text = (
        "B.Tech Computer Science student with a CGPA of <b>8.54</b> and strong knowledge of "
        "<b>Data Structures and Algorithms</b>, <b>Object-Oriented Programming</b>, <b>Database Management Systems</b>, "
        "and <b>Software Engineering fundamentals</b>. Proficient in <b>Java, C++, JavaScript Basics, SQL, HTML, CSS, React.js Basics, "
        "Node.js, and MongoDB</b>. Solved <b>300+ coding problems</b> and built full-stack web applications with a focus on problem solving, "
        "clean code, and scalable development practices."
    )
    story.append(Paragraph(summary_text, body_style))

    # Education
    add_section("Education")
    story.append(Paragraph("<b>Lakshmi Narain College of Technology</b>, Bhopal, MP", subheading_style))
    story.append(Paragraph("<i>Bachelor of Technology in Computer Science and Engineering</i> (2023 – 2027) &nbsp;|&nbsp; <b>CGPA: 8.54</b> (till 5th semester)", body_style))
    story.append(Spacer(1, 3))

    story.append(Paragraph("<b>B.D. Public School</b>, Patna, Bihar", subheading_style))
    story.append(Paragraph("<i>Senior Secondary Education</i> (2020 – 2022) &nbsp;|&nbsp; CBSE (12th): <b>82.8%</b> (2022)", body_style))
    story.append(Spacer(1, 3))

    story.append(Paragraph("<b>B.D. Public School</b>, Patna, Bihar", subheading_style))
    story.append(Paragraph("<i>Secondary Education</i> (2019 – 2020) &nbsp;|&nbsp; CBSE (10th): <b>93.6%</b> (2020)", body_style))

    # Technical Skills
    add_section("Technical Skills")
    skills_text = (
        "• <b>Programming Languages:</b> Java Fundamentals, C++<br/>"
        "• <b>Web Technologies:</b> HTML, CSS, Javascript, React.js, Node.js, Express.js<br/>"
        "• <b>Databases:</b> MySQL, MongoDB<br/>"
        "• <b>CS Fundamentals:</b> Data Structures and Algorithms, Object-Oriented Programming (OOPs), Database Management Systems (DBMS), Operating Systems, Software Engineering Fundamentals, Computer Networks, Cyber Security Fundamentals"
    )
    story.append(Paragraph(skills_text, body_style))

    # Certifications
    add_section("Certifications")
    certs_text = (
        "• <b>Database Management System (Part 1 & Part 2)</b> – Infosys<br/>"
        "• <b>Networking Basics</b> – Cisco<br/>"
        "• <b>Junior Cybersecurity Analyst</b> – Cisco"
    )
    story.append(Paragraph(certs_text, body_style))

    # Projects
    add_section("Projects")
    
    # Project 1: Room Rental Marketplace -> Airbnb
    story.append(Paragraph("<b>Room Rental Marketplace – Airbnb Clone</b> &nbsp;|&nbsp; <i>github.com/Ankit-Tiwary45</i>", subheading_style))
    story.append(Paragraph("• Built a full-stack Room Rental Marketplace web application inspired by Airbnb using React.js, Node.js, Express.js, and MongoDB.", bullet_style))
    story.append(Paragraph("• Implemented interactive room search, date range availability reservation, price range filtering, and host property listing management.", bullet_style))
    story.append(Paragraph("• Designed secure user authentication with JWT, MongoDB spatial schema indexing, and responsive image showcases.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 2: Library Management System
    story.append(Paragraph("<b>Library Management System</b> &nbsp;|&nbsp; <i>github.com/Ankit-Tiwary45/Library_Management_system</i>", subheading_style))
    story.append(Paragraph("• Built a full-stack Library Management System using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL.", bullet_style))
    story.append(Paragraph("• Implemented JWT authentication, role-based access control, and CRUD operations for books, users, and issue/return management.", bullet_style))
    story.append(Paragraph("• Designed a responsive dashboard with search, filtering, pagination, and automated fine calculation using RESTful APIs.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 3: Hospital Slip Management System
    story.append(Paragraph("<b>Hospital Slip Management System</b> &nbsp;|&nbsp; <i>github.com/Ankit-Tiwary45/Smart_slip_management_system</i>", subheading_style))
    story.append(Paragraph("• Developed a full-stack slip management system to create, store, update, and track digital slips efficiently.", bullet_style))
    story.append(Paragraph("• Implemented secure user authentication and role-based access control for managing doctors or patient slip records.", bullet_style))
    story.append(Paragraph("• Integrated MongoDB for structured data storage and optimized database queries for faster record retrieval.", bullet_style))
    story.append(Paragraph("• Built a responsive user interface using React.js to simplify slip submission and monitoring.", bullet_style))

    doc.build(story)
    print(f"Resume generated successfully at {output_filename}")

if __name__ == "__main__":
    public_dir = r"c:\Users\ankit\OneDrive\Desktop\portfolio\public"
    create_resume(os.path.join(public_dir, "Spider_CV.pdf"))
    create_resume(os.path.join(public_dir, "Ankit_Tiwary_Resume.pdf"))
