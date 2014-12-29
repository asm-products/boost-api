Boost API Endpoints
===================

<table>
	<thead>
		<tr>
			<th>URI</th>
			<th>Method</th>
			<th>Description</th>
			<th>Params</th>
			<th>Completed (Y/N)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>/boosts</td>
			<td align="center">GET</td>
			<td>Retrieves JSON array of Boosts</td>
			<td>Lkimit, offset</td>
			<td align="center">N</td>
		</tr>
		<tr>
			<td>/boosts/:id</td>
			<td align="center">GET</td>
			<td>Retrieves JSON object of single Boost matching :id</td>
			<td>Boost's ObjectId</td>
			<td align="center">N</td>
		</tr>
		<tr>
			<td>/boosts/:id/favourite</td>
			<td align="center">PUT</td>
			<td>Favourites/unfavourites a boost. User's jsonwebtoken is sent with header for identification</td>
			<td>Token in header</td>
			<td align="center">N</td>
		</tr>
		<tr>
			<td>/boosts/:id/favourited</td>
			<td align="center">GET</td>
			<td>Gets JSON array of users that have favourited this Boost</td>
			<td></td>
			<td align="center">N</td>
		</tr>
		<tr>
			<td>/auth/signup</td>
			<td align="center">POST</td>
			<td>Creates a user account</td>
			<td>First name, last name, email, password</td>
			<td align="center">N</td>
		</tr>
		<tr>
			<td>/auth/login</td>
			<td align="center">POST</td>
			<td>Logs a user in using jsonwebtoken</td>
			<td>Username, password</td>
			<td align="center">N</td>
		</tr>
		<tr>
			<td>/users/me</td>
			<td align="center">GET</td>
			<td>Retrieves JSON object of user</td>
			<td>Token in header</td>
			<td align="center">N</td>
		</tr>
		<tr>
			<td>/users/me</td>
			<td align="center">PUT</td>
			<td>Updates a user profile</td>
			<td>Token in header, profile fields</td>
			<td align="center">N</td>
		</tr>
		<tr>
			<td>/users/me/favourites</td>
			<td align="center">GET</td>
			<td>Retrieves JSON array of user's favourite Boosts</td>
			<td>Limit, offset, token in header</td>
			<td align="center">N</td>
		</tr>
	</tbody>
</table>