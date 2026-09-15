<script setup lang="ts">
interface PasswordRequirements {
  length: boolean
  uppercase: boolean
  lowercase: boolean
  number: boolean
  special: boolean
}

const { passwordRequirements, password } = defineProps<{
    password: string,
    passwordRequirements: PasswordRequirements
}>()
</script>

<template>
<div class="text-xs grid grid-cols-1 md:grid-cols-2 gap-1">
    <div class="text-gray-500 flex items-center gap-2">
        <Icon :name="passwordRequirements.length ? 'check' : 'x-mark'" :class="passwordRequirements.length ? 'text-green-500' : 'text-gray-400'" class="w-4 h-4"></Icon>
        <span :class="passwordRequirements.length ? 'text-green-600 font-medium' : 'text-gray-500'">
            อย่างน้อย 8 ตัวอักษร
        </span>
    </div>
    <div class="text-gray-500 flex items-center gap-2">
        <Icon :name="passwordRequirements.uppercase ? 'check' : 'x-mark'" :class="passwordRequirements.uppercase ? 'text-green-500' : 'text-gray-400'" class="w-4 h-4"></Icon>
        <span :class="passwordRequirements.uppercase ? 'text-green-600 font-medium' : 'text-gray-500'">
            ตัวพิมพ์ใหญ่
        </span>
    </div>
    <div class="text-gray-500 flex items-center gap-2">
        <Icon :name="passwordRequirements.lowercase ? 'check' : 'x-mark'" :class="passwordRequirements.lowercase ? 'text-green-500' : 'text-gray-400'" class="w-4 h-4"></Icon>
        <span :class="passwordRequirements.lowercase ? 'text-green-600 font-medium' : 'text-gray-500'">
            ตัวพิมพ์เล็ก
        </span>
    </div>
    <div class="text-gray-500 flex items-center gap-2">
        <Icon :name="passwordRequirements.number ? 'check' : 'x-mark'" :class="passwordRequirements.number ? 'text-green-500' : 'text-gray-400'" class="w-4 h-4"></Icon>
        <span :class="passwordRequirements.number ? 'text-green-600 font-medium' : 'text-gray-500'">
            ตัวเลข
        </span>
    </div>
    <div class="text-gray-500 flex items-center gap-2">
        <Icon :name="passwordRequirements.special ? 'check' : 'x-mark'" :class="passwordRequirements.special ? 'text-green-500' : 'text-gray-400'" class="w-4 h-4"></Icon>
        <span :class="passwordRequirements.special ? 'text-green-600 font-medium' : 'text-gray-500'">
            อักขระพิเศษ (! @ # $ % ^ & *)
        </span>
    </div>
</div>
</template>