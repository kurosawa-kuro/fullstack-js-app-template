#!/bin/bash

# 1. 必要なパッケージのインストール
sudo apt update && sudo apt install -y software-properties-common

# 2. AnsibleのPPAの追加
sudo apt-add-repository --yes --update ppa:ansible/ansible

# 3. Ansibleのインストール
sudo apt install -y ansible

# 4. インストールの確認
ansible --version

echo "Ansibleのインストールが完了しました！"

