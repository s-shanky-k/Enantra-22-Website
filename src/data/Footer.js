import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "../components/Footer/Footer.module.css";

export const SOCIAL_MEDIAS = [
	{
		icon: <InstagramIcon className={`${styles.socialIcon}`} />,
		url: "https://instagram.com/student_entrepreneurship_club?utm_medium=copy_link",
	},
	{
		icon: <LinkedInIcon className={`${styles.socialIcon}`} />,
		url: "https://www.linkedin.com/company/capitalize-students-entrepreneurship-club/mycompany/",
	},
	{
		icon: <FacebookIcon className={`${styles.socialIcon}`} />,
		url: "https://www.facebook.com/CapitalizeAU/",
	},
];
