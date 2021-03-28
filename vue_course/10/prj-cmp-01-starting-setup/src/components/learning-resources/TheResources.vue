<template>
    <div>
        <base-card>
            <!-- click listeners fall through to the root of component, in this case the button in base button -->
            <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
            <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
        </base-card>
        <keep-alive>
            <component :is="selectedTab"></component>
        </keep-alive>
    </div>
</template>

<script>
import StoredResources from './StoredResources';
import AddResource from './AddResource';

export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                id: 'official-guide',
                title: 'Official Guide',
                description: 'The official Vue.js documentation.',
                link: 'https://vuejs.org',
                },
                {
                id: 'google',
                title: 'Google',
                description: 'You need to Google!',
                link: 'https:/google.ca',
                },
            ],
        };
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResources: this.removeResource,
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, url) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url,
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        removeResource(id) {
            const resIndex = this.storedResources.findIndex(
                res => res.id === id
            );
            this.storedResources.splice(resIndex, 1);
        }
    }
}
</script>