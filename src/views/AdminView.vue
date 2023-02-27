<template>
  <div class="container">
    <div class="row">
      <table class="table">
        <tbody>
          <tr v-for="user in users" :key="user.userID">
          <td>
            {{ user.firstname }}
          </td>
          <td>
            {{ user.lastname }}
          </td>
          <td>
            <img :src="user.userProfile" :alt="user.firstname">
          </td>
          </tr>
        </tbody>
      </table>
    </div>   
  </div>
</template>
