import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Alert, Button } from "react-bootstrap";
import history from "../../constants/history";
import * as ROUTES from "../../constants/routes";

const VerifyEmail = () => {
	const { currentUser, verifyUserEmail } = useAuth();
	// const [error, setError] = useState('');
	const [message, setMessage] = useState("");

	if (!currentUser) {
		history.push(`${ROUTES.LOG_IN}`);
	}

	const sendVerificationEmail = async () => {
		try {
			await verifyUserEmail().then(() => {
				history.push(`${ROUTES.PROJECT_FORM}`);
			});
		} catch (e) {
			// setError("Failed to send verification email!");
		}
		setMessage(
			"Email send successfully! Please click the link in the email and refresh the page"
		);
	};
	return (
		<>
			{currentUser && currentUser.emailVerified ? (
				<h1 className="d-flex justify-content-center">
					Your email has been verified
				</h1>
			) : (
				<div
					className="container-fluid w-25 justify-content-center"
					style={{
						backgroundColor: "#D1F2EB",
						border: "3px solid white",
						borderRadius: "30px",
						padding: "20px",
						textAlign: "center",
					}}
				>
					{message && <Alert variant="success">{message}</Alert>}
					{/*{ error && <Alert variant="danger">{error}</Alert> }*/}
					<div>
						<h1>Email Verification</h1>
						<Button
							variant="outline-dark"
							onClick={sendVerificationEmail}
						>
							Send verification email
						</Button>
					</div>
				</div>
			)}
		</>
	);
};

export default VerifyEmail;
