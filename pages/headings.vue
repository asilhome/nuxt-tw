<script setup>
import { ChevronRightIcon, CreditCardIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="space-y-6 py-5">
    <!-- <div class="space-y-6 divide-y py-5"> -->
    <section>
      <VContainer>
        <VBar>
          <div>
            <p class="text-base text-gray-500">Design Systems</p>
            <h1 class="text-2xl text-gray-900">Headings</h1>
            <p class="text-lg text-gray-500">Design Systems</p>
          </div>
        </VBar>
      </VContainer>
    </section>

    <section>
      <VContainer>
        <VCard>
          <VBar>
            <div class="flex space-x-4">
              <div>
                <p class="text-xs text-gray-500">Art</p>
                <h2 class="text-xl text-gray-900">Geometric Pattern</h2>
                <p class="text-sm text-gray-500">Subtitle</p>
              </div>
            </div>
          </VBar>
          <VContent>
            <p class="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto accusantium praesentium eius, ut atque fuga culpa,
              similique sequi cum eos quis dolorum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Architecto accusantium praesentium
              eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
            </p>
          </VContent>
          <VBar>
            <h2 class="text-sm text-gray-900">#islamic #geometric</h2>
          </VBar>
        </VCard>
      </VContainer>
    </section>

    <section>
      <VContainer>
        <VCard>
          <VBar>
            <div class="flex space-x-4">
              <div>
                <p class="text-xs text-gray-500">Art</p>
                <h2 class="text-xl text-gray-900">Colors</h2>
                <p class="text-sm text-gray-500">Subtitle</p>
              </div>
            </div>
            <div>
              <VButton icon outlined>
                <IconHamburger />
              </VButton>
            </div>
          </VBar>
          <VContent class="flex flex-wrap gap-5">
            <VCard class="bg-primary-500">
              <VContent class="w-28 text-white text-center">primary</VContent>
            </VCard>
            <VCard class="bg-secondary-500">
              <VContent class="w-28 text-white text-center">secondary</VContent>
            </VCard>
            <VCard>
              <VContent class="w-28 text-center">accent</VContent>
            </VCard>
            <VCard>
              <VContent class="w-28 text-center">light</VContent>
            </VCard>
            <VCard>
              <VContent class="w-28 text-center">dark</VContent>
            </VCard>
            <VCard class="bg-error-500">
              <VContent class="w-28 text-white text-center">error</VContent>
            </VCard>
            <VCard class="bg-info-500">
              <VContent class="w-28 text-white text-center">info</VContent>
            </VCard>
            <VCard class="bg-success-500">
              <VContent class="w-28 text-white text-center">success</VContent>
            </VCard>
            <VCard class="bg-warning-500">
              <VContent class="w-28 text-white text-center">warning</VContent>
            </VCard>
          </VContent>
          <VBar>
            <h2 class="text-sm text-gray-900">#islamic #geometric</h2>
          </VBar>
        </VCard>
      </VContainer>
    </section>

    <section>
      <VContainer>
        <VBar>
          <h2 class="text-xl text-gray-900">Buttons</h2>
        </VBar>
      </VContainer>
    </section>

    <section>
      <VContainer>
        <VCard>
          <VBar>
            <div class="flex space-x-4">
              <div>
                <h3 class="text-lg text-gray-900">Default Shape</h3>
              </div>
            </div>
          </VBar>
          <VContent>
            <VBar class="font-semibold">Variant (default)</VBar>
            <VContent class="flex flex-wrap gap-5">
              <VButton>Tile Button</VButton>
              <VButton variant="rounded">Rounded Button</VButton>
              <VButton variant="pill">Pill Button</VButton>
              <VButton variant="icon"><IconHamburger /></VButton>
            </VContent>
          </VContent>
          <VContent>
            <VBar class="font-semibold">Text</VBar>
            <VContent class="flex flex-wrap gap-5">
              <VButton text>Tile Button</VButton>
              <VButton variant="rounded" text>Rounded Button</VButton>
              <VButton variant="pill" text>Pill Button</VButton>
              <VButton variant="icon" text><IconHamburger /></VButton>
            </VContent>
          </VContent>
          <VContent>
            <VBar class="font-semibold">Text and Color</VBar>
            <VContent class="flex flex-wrap gap-5">
              <VButton color="primary" text>Tile Button</VButton>
              <VButton variant="rounded" color="primary" text
                >Rounded Button</VButton
              >
              <VButton variant="pill" color="primary" text>Pill Button</VButton>
              <VButton variant="icon" color="primary" text
                ><IconHamburger
              /></VButton>
            </VContent>
          </VContent>
          <VContent>
            <VBar class="font-semibold">Outlined</VBar>
            <VContent class="flex flex-wrap gap-5">
              <VButton outlined>Tile Button</VButton>
              <VButton variant="rounded" outlined>Rounded Button</VButton>
              <VButton variant="pill" outlined>Pill Button</VButton>
              <VButton variant="icon" outlined><IconHamburger /></VButton>
            </VContent>
          </VContent>
          <VContent>
            <VBar class="font-semibold">Outlined, Text and Color</VBar>
            <VContent class="flex flex-wrap gap-5">
              <VButton outlined color="primary" text>Tile Button</VButton>
              <VButton variant="rounded" outlined color="something" text
                >Rounded Button</VButton
              >
              <VButton variant="pill" outlined color="primary" text
                >Pill Button</VButton
              >
              <VButton variant="icon" outlined color="primary" text
                ><IconHamburger
              /></VButton>
            </VContent>
          </VContent>
          <VContent>
            <VBar class="font-semibold">Color</VBar>
            <VContent class="flex flex-wrap gap-5">
              <VButton color="primary">Tile Button (default)</VButton>
              <VButton variant="rounded" color="primary"
                >Rounded Button</VButton
              >
              <VButton variant="pill" color="primary">Pill Button</VButton>
              <VButton variant="icon" color="primary"
                ><IconHamburger
              /></VButton>
            </VContent>
          </VContent>
          <VContent>
            <VBar class="font-semibold">Color & Plain</VBar>
            <VContent class="flex flex-wrap gap-5">
              <VButton color="primary" plain>Tile Button (default)</VButton>
              <VButton variant="rounded" color="stupid" plain
                >Rounded Button</VButton
              >
              <VButton variant="pill" color="primary" plain
                >Pill Button</VButton
              >
              <VButton variant="icon" color="primary" plain
                ><IconHamburger
              /></VButton>
            </VContent>
          </VContent>
        </VCard>
      </VContainer>
    </section>

    <section>
      <VContainer>
        <VBar>
          <h2 class="text-xl text-gray-900">Links</h2>
        </VBar>
        <VContent class="flex flex-wrap gap-5">
          <VLink to="/home"> Hyperlink </VLink>
          <VLink to="/home" color="primary"> Hyperlink </VLink>
          <VLink to="/home" color="primary" class="space-x-2">
            <span class="text-sm font-semibold">Hyperlink</span>
            <ChevronRightIcon class="h-5 w-5" />
          </VLink>
          <VLink to="/home" color="primary" class="space-x-2">
            <CreditCardIcon class="h-5 w-5" />
            <span class="text-sm">Billing</span>
          </VLink>
        </VContent>
        <!-- <VContent class="flex flex-wrap gap-5"> </VContent> -->
      </VContainer>
    </section>

    <section>
      <VContainer>
        <VCard>
          <VBar>
            <div class="flex space-x-4">
              <div>
                <VButton icon outlined>
                  <IconHamburger />
                </VButton>
              </div>
              <div>
                <p class="text-xs text-gray-500">Art</p>
                <h2 class="text-xl text-gray-900">Geometric Pattern</h2>
                <p class="text-sm text-gray-500">Subtitle</p>
              </div>
            </div>
            <div>
              <VButton icon outlined>
                <IconHamburger />
              </VButton>
            </div>
          </VBar>
          <VContent>
            <p class="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto accusantium praesentium eius, ut atque fuga culpa,
              similique sequi cum eos quis dolorum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Architecto accusantium praesentium
              eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
            </p>
          </VContent>
          <VBar>
            <h2 class="text-sm text-gray-900">#islamic #geometric</h2>
          </VBar>
        </VCard>
      </VContainer>
    </section>

    <section>
      <VContainer>
        <VCard>
          <VBar>
            <div class="flex space-x-4">
              <div>
                <VButton icon outlined>
                  <IconHamburger />
                </VButton>
              </div>
              <div>
                <p class="text-xs text-gray-500">Art</p>
                <h2 class="text-xl text-gray-900">Geometric Pattern</h2>
                <p class="text-sm text-gray-500">Subtitle</p>
              </div>
            </div>
            <div>
              <VButton icon outlined>
                <IconHamburger />
              </VButton>
            </div>
          </VBar>
          <VContent>
            <p class="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto accusantium praesentium eius, ut atque fuga culpa,
              similique sequi cum eos quis dolorum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Architecto accusantium praesentium
              eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
            </p>
          </VContent>
          <VBar>
            <h2 class="text-sm text-gray-900">#islamic #geometric</h2>
          </VBar>
        </VCard>
      </VContainer>
    </section>

    <section>
      <VContainer>
        <VCard class="border rounded-xl shadow-md divide-y">
          <VBar>
            <div class="flex space-x-4">
              <div>
                <VButton icon outlined>
                  <IconHamburger />
                </VButton>
              </div>
              <div>
                <p class="text-xs text-gray-500">Art</p>
                <h2 class="text-xl text-gray-900">Geometric Pattern</h2>
                <p class="text-sm text-gray-500">Subtitle</p>
              </div>
            </div>
            <div>
              <VButton icon outlined>
                <IconHamburger />
              </VButton>
            </div>
          </VBar>
          <VContent>
            <p class="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto accusantium praesentium eius, ut atque fuga culpa,
              similique sequi cum eos quis dolorum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Architecto accusantium praesentium
              eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
            </p>
          </VContent>
          <VBar>
            <h2 class="text-sm text-gray-900">#islamic #geometric</h2>
          </VBar>
        </VCard>
      </VContainer>
    </section>

    <section>
      <VContainer sm>
        <VCard class="border rounded-xl shadow-md divide-y bg-blue-50">
          <VBar>
            <div class="flex space-x-4">
              <div>
                <p class="text-xs text-gray-500">Components</p>
                <h2 class="text-lg text-gray-900">Typography</h2>
                <p class="text-sm text-gray-500">Card Heading Sizes</p>
              </div>
            </div>
          </VBar>
          <VContent>
            <p class="text-xs text-gray-500">text-xs</p>
            <p class="text-lg text-gray-900">text-lg</p>
            <p class="text-sm text-gray-500">text-sm</p>
          </VContent>
        </VCard>
      </VContainer>
    </section>
  </div>
</template>
