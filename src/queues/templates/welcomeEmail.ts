export const welcomeEmail = (data) => {
	return `<!doctype html>
		<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
			<head>
				<meta charset="UTF-8" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<meta name="x-apple-disable-message-reformatting" />
				<title>Welcome to AbegHelp.me!</title>
				<!--[if mso]>
					<style>
						ul,
						ol {
							margin: 0 !important;
						}
						li {
							margin-left: 47px !important;
						}
					</style>
				<![endif]-->
			</head>

			<body style="margin: 0; padding: 0;">
				<div style="background-color: #f6f6f6;">
					<!--[if mso]>
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
            <tr>
              <td>
        <![endif]-->
					<table
						role="presentation"
						width="100%"
						cellspacing="0"
						cellpadding="0"
						style="max-width: 600px; margin: auto;"
					>
						<!-- Header -->
						<tr>
							<td style="padding: 20px 0; text-align: center;">
								<img
									src="https://via.placeholder.com/55"
									alt="AbegHelp.me Logo"
									width="55"
									style="display: block; max-width: 100%;"
								/>
								<h2 style="font-family: 'Trebuchet MS', sans-serif; color: #008080; margin: 10px 0;">
									<strong>AbegHelp.me</strong>
								</h2>
							</td>
						</tr>
						<!-- Welcome Message -->
						<tr>
							<td style="background-color: #ffffff; padding: 20px;">
								<h2 style="font-family: 'Trebuchet MS', sans-serif;">
									<strong>Welcome to AbegHelp.me! 🎉</strong>
								</h2>
								<p style="font-family: 'Trebuchet MS', sans-serif;">Verify Your Email to Get Started.</p>
								<p style="font-family: 'Trebuchet MS', sans-serif;">
									Hi ${data.firstName},<br />
									We’re glad to have you onboard! You’re already on your way to fundraising with ease.
								</p>
								<p style="font-family: 'Trebuchet MS', sans-serif;">
									Whether you’re here for yourself, for a cause, or just for fun — welcome!
								</p>
								<!-- Verify Button -->
								<table cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 20px auto;">
									<tr>
										<td style="border-radius: 8px; background-color: #008080;">
											<a
												href="${data.verificationLink}"
												target="_blank"
												style="font-size: 20px; font-family: 'Trebuchet MS', sans-serif; color: #ffffff; text-decoration: none; display: inline-block; padding: 10px 20px; border-radius: 8px; border: 2px solid #008080;"
											>
												Verify your email
											</a>
										</td>
									</tr>
								</table>
								<!-- End Verify Button -->
							</td>
						</tr>
						<!-- Footer -->
						<tr>
							<td style="background-color: #ffffff; padding: 20px;">
								<p style="font-family: 'Trebuchet MS', sans-serif; font-size: 18px; color: #333333;">
									If there’s anything you need, we’ll be here every step of the way.<br /><br />
									Thanks,<br />
									The team
								</p>
							</td>
						</tr>
						<tr>
							<td style="background-color: #ffffff; padding: 20px;">
								<p style="font-family: 'Trebuchet MS', sans-serif; color: #333333;">© 2024 AbegHelp.me</p>
							</td>
						</tr>
					</table>
					<!--[if mso]>
              </td>
            </tr>
          </table>
        <![endif]-->
				</div>
			</body>
		</html>`;
};
