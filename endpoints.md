Boost API Endpoints
===================

<table>
	<thead>
		<tr>
			<th>URI</th>
			<th>METHOD</th>
			<th>DESCRIPTION</th>
			<th>COMPLETED (Y/N)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>/boosts</td>
			<td align="center">GET</td>
			<td>Retrieves JSON array of Boosts</td>
			<td align="center">N</td>
		</tr>
		<tr>
			<td>/boosts/:id</td>
			<td align="center">GET</td>
			<td>Retrieves JSON object of single Boost matching :id</td>
			<td align="center">N</td>
		</tr>
		<tr>
			<td>/boosts/:id/favourite</td>
			<td align="center">PUT</td>
			<td>Favourites/unfavourites a boost. User's jsonwebtoken is sent with header for identification</td>
			<td align="center">N</td>
		</tr>
		<tr>
			<td>/boosts/:id/favourited</td>
			<td align="center">GET</td>
			<td>Gets JSON array of users that have favourited this Boost</td>
			<td align="center">N</td>
		</tr>
		<tr>
			<td>/auth/signup</td>
			<td align="center">POST</td>
			<td>Creates a user account</td>
			<td align="center">N</td>
		</tr>
		<tr>
			<td>/auth/login</td>
			<td align="center">POST</td>
			<td>Logs a user in using jsonwebtoken</td>
			<td align="center">N</td>
		</tr>
		<tr>
			<td>/users/me</td>
			<td align="center">GET</td>
			<td>Retrieves JSON object of user</td>
			<td align="center">N</td>
		</tr>
		<tr>
			<td>/users/me</td>
			<td align="center">PUT</td>
			<td>Updates a user profile</td>
			<td align="center">N</td>
		</tr>
		<tr>
			<td>/users/me/favourites</td>
			<td align="center">GET</td>
			<td>Retrieves JSON array of user's favourite Boosts</td>
			<td align="center">N</td>
		</tr>
	</tbody>
</table>