<script setup>
const state = reactive({
  left: {
    isHidden: false,
  },
  right: {
    isHidden: false,
  },
});
</script>

<template>
  <BaseLayout>
    <Sidebar v-model="state.left.isHidden">
      <div class="flex flex-col h-screen bg-white">
        <Card>header</Card>
        <Divider />
        <div class="px-2 mt-2 flex-1 overflow-y-auto">
          <SideNav class="w-60">
            <NuxtLink to="/home" active-class="bg-gray-100 text-gray-900" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span class="truncate">Home</span>
            </NuxtLink>
            <NuxtLink to="/containers" active-class="bg-gray-100 text-gray-900" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span class="truncate">Containers</span>
            </NuxtLink>
            <NuxtLink to="/headings" active-class="bg-gray-100 text-gray-900" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span class="truncate">Headings</span>
            </NuxtLink>
            <NuxtLink to="/grids" active-class="bg-gray-100 text-gray-900" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span class="truncate">Grid</span>
            </NuxtLink>
            <Divider />
            <NuxtLink to="/accounts" activeClass="bg-gray-100 text-gray-900" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span class="truncate">Accounts</span>
            </NuxtLink>
            <NuxtLink to="/categories" activeClass="bg-gray-100 text-gray-900" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span class="truncate">Categories</span>
            </NuxtLink>
            <NuxtLink to="/transactions" activeClass="bg-gray-100 text-gray-900" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span class="truncate">Transactions</span>
            </NuxtLink>
            <NuxtLink to="/members" activeClass="bg-gray-100 text-gray-900" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span class="truncate">Members</span>
            </NuxtLink>
            <Divider />
            <NuxtLink to="/apis" activeClass="bg-gray-100 text-gray-900" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span class="truncate">APIs</span>
            </NuxtLink>
            <NuxtLink to="/signin" activeClass="bg-gray-100 text-gray-900" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span class="truncate">Sign In</span>
            </NuxtLink>
            <NuxtLink to="/user" activeClass="bg-gray-100 text-gray-900" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span class="truncate">User</span>
            </NuxtLink>
            <NuxtLink to="/signout" activeClass="bg-gray-100 text-gray-900" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span class="truncate">Sign Out</span>
            </NuxtLink>
            <!-- <p>MENU</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>MENU</p> -->
          </SideNav>
        </div>
        <div class="w-full border-t border-gray-300"></div>
        <Card>footer</Card>
      </div>
    </Sidebar>

    <main class="flex flex-col flex-1">
      <!-- app header -->
      <header class="sticky top-0 border-b border-gray-200">
        <div class="flex justify-between px-4 py-2">
          <div class="flex">

            <div class="flex items-center">
              <button type="button" @click="state.left.isHidden = !state.left.isHidden" class="inline-flex items-center justify-center rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
                <IconHamburger />
              </button>
              <!-- <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> -->
            </div>
            <!-- <nav class="flex space-x-8" aria-label="Global">
              Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900"
              <a href="#" class="bg-gray-100 text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium" aria-current="page">Dashboard</a>
              <a href="#" class="text-gray-900 hover:bg-gray-100 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium">Team</a>
              <a href="#" class="text-gray-900 hover:bg-gray-100 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium">Projects</a>
              <a href="#" class="text-gray-900 hover:bg-gray-100 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium">Calendar</a>
            </nav> -->
          </div>
          <div class="flex items-center">
            <button type="button" @click="state.right.isHidden = !state.right.isHidden" class="ml-3 flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </button>
          </div>
        </div>
      </header>

      <!-- content -->
      <div class="flex-1 overflow-y-auto">
        <slot />
      </div>

      <!-- footer -->
      <footer>FOOTER</footer>
    </main>

    <Sidebar v-model="state.right.isHidden" right temporary>
      <div class="flex flex-col h-screen bg-white">
        <Card>header</Card>
        <div class="px-2 mt-2 flex-1 overflow-y-auto">
          <SideNav class="w-60">
            <NuxtLink to="/profile" active-class="bg-gray-100 text-gray-900" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span class="truncate">Profile</span>
            </NuxtLink>
            <NuxtLink to="/" active-class="bg-gray-100 text-gray-900" class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <span class="truncate">Sign out</span>
            </NuxtLink>
            <!-- <p>MENU</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>Menu</p>
            <p>MENU</p> -->
          </SideNav>
        </div>
        <Card>footer</Card>
        </div>
    </Sidebar>
  </BaseLayout>
</template>
